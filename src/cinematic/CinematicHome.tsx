import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, Pause, Play, VolumeX } from 'lucide-react';
import { defaultConfig, inventory, money, type Vehicle } from '../dealership/data';
import { useMotionPreference } from './motion';
import './cinematic.css';

type Props = { config: typeof defaultConfig; onBrowse: (condition?: string) => void; onSearch: (filters: Record<string,string>) => void; onVehicle: (v: Vehicle) => void; onTrade: () => void; onNavigate: (page: string) => void; renderCard: (v: Vehicle) => React.ReactNode };
const chapters = [
  { vehicle: inventory[2], title: 'Built to\nfeel something.', sub: 'THE PERFORMANCE EDIT', description: 'The long way home has never looked so good.', image: '/media/grand-tourer.jpg', number: '01', label: 'Performance', spec: 'Coupe / Automatic' },
  { vehicle: inventory[0], title: 'Beyond\nthe ordinary.', sub: 'THE ADVENTURE EDIT', description: 'Room for the unexpected. Ready for your everyday.', image: '/media/adventure.jpg', number: '02', label: 'Adventure', spec: 'SUV / Automatic' },
  { vehicle: inventory[3], title: 'Every day.\nElevated.', sub: 'THE EVERYDAY EDIT', description: 'A considered collection. A drive that feels like you.', image: '/media/adventure.jpg', number: '03', label: 'Everyday', spec: 'Hybrid / SUV' },
];

function FilmHero({config, onBrowse, onTrade}:{config: typeof defaultConfig; onBrowse: () => void; onTrade: () => void}) {
  const video = useRef<HTMLVideoElement>(null);
  const reduced = useMotionPreference();
  const [paused, setPaused] = useState(false);
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const [inView, setInView] = useState(true);
  const [hidden, setHidden] = useState(document.hidden);
  const [saveData] = useState(() => (navigator as Navigator & {connection?: {saveData?: boolean}}).connection?.saveData === true);
  const shouldPlay = !reduced && !saveData && !paused && !hidden && inView && !failed && !!config.video;
  useEffect(() => {setFailed(false);setReady(false);}, [config.video]);
  useEffect(() => {
    const el = video.current;
    if (!el) return;
    if (shouldPlay) { void el.play().catch(() => setPaused(true)); } else el.pause();
  }, [shouldPlay, config.video]);
  useEffect(() => {
    const update = () => setHidden(document.hidden);
    document.addEventListener('visibilitychange', update);
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {threshold: 0.05});
    if(video.current) observer.observe(video.current);
    return () => { document.removeEventListener('visibilitychange', update); observer.disconnect(); };
  }, [reduced, saveData, config.video, failed]);
  return <section className="film-hero" aria-label="The road is yours">
    <div className="film-layer">
      <img className="film-poster" src={config.hero} alt="Original silver concept coupe on a coastal mountain road" fetchPriority="high" onError={e=>{e.currentTarget.onerror=null;e.currentTarget.src='/media/grand-tourer.jpg';}}/>
      {!reduced && !saveData && config.video && !failed && <video ref={video} key={config.video} className={ready ? 'film-video ready' : 'film-video'} muted loop playsInline preload="none" poster={config.hero} onPlaying={()=>setReady(true)} onError={()=>setFailed(true)} aria-hidden="true"><source src={config.video} type="video/mp4" onError={()=>setFailed(true)}/></video>}
      <div className="film-gradient"/>
    </div>
    <div className="film-topline"><span>INDEPENDENT SPIRIT. EXCEPTIONAL DRIVES.</span><span>THE 2026 COLLECTION</span></div>
    <div className="film-copy"><p className="micro">A NEW PERSPECTIVE ON THE ROAD AHEAD</p><h1>The road<br/>is <span>yours.</span></h1><div className="film-copy-bottom"><p>{config.tagline}<br/>Find the one that takes you somewhere.</p><div className="film-actions"><button className="film-cta" onClick={onBrowse}>Discover the collection <ArrowUpRight size={18}/></button><button className="understated" onClick={onTrade}>Value your trade <ArrowRight size={16}/></button></div></div></div>
    <div className="film-bottom"><a href="#the-drive" className="scroll-cue"><span className="scroll-line"/><span>SCROLL TO EXPLORE</span><ArrowDown size={13}/></a><div className="film-controls"><span><VolumeX size={13}/> ORIGINAL CONCEPT FILM</span>{!reduced && !saveData && config.video && !failed && <button aria-label={paused?'Play background film':'Pause background film'} aria-pressed={paused} onClick={()=>setPaused(!paused)}>{paused?<Play size={14}/>:<Pause size={14}/>}</button>}{(reduced||saveData||failed)&&<span className="still-label">STILL MODE</span>}</div></div>
  </section>;
}

export default function CinematicHome({config,onBrowse,onSearch,onVehicle,onTrade,onNavigate,renderCard}:Props) {
  const root = useRef<HTMLDivElement>(null);
  const chapterImage = useRef<HTMLImageElement>(null);
  const [active, setActive] = useState(0);
  const [search, setSearch] = useState<Record<string,string>>({});
  const [previous, setPrevious] = useState<number | null>(null);
  const reduced = useMotionPreference();
  const chapter = chapters[active];
  useLayoutEffect(() => {
    const gsap = window.gsap;
    if(!gsap || !window.ScrollTrigger || !root.current) return;
    gsap.registerPlugin(window.ScrollTrigger);
    const media = gsap.matchMedia();
    const context = gsap.context(() => {
      media.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.fromTo('.film-copy h1', { y: 44, opacity: 0 }, { y: 0, opacity: 1, duration: 1.3, ease: 'power3.out' });
        root.current?.querySelectorAll('.reveal').forEach(el => gsap.fromTo(el, { y: 28 }, { y: 0, duration: 1, ease: 'power2.out', scrollTrigger: {trigger: el, start: 'top 90%', once: true} }));
      });
      media.add('(min-width: 1000px) and (prefers-reduced-motion: no-preference)', () => {
        gsap.to('.film-layer', { yPercent: 20, ease: 'none', scrollTrigger: {trigger: '.film-hero', start: 'top top', end: 'bottom top', scrub: true} });
        const story = gsap.timeline({scrollTrigger: {trigger: '.drive-manifesto', start: 'top top', end: '+=90%', pin: true, scrub: 0.7, invalidateOnRefresh: true}});
        story.to('.manifesto-image', {scale: 1.08, yPercent: -6, ease: 'none'}, 0).to('.manifesto-word', {opacity: 1, stagger: 0.15, ease: 'none'}, 0).to('.manifesto-rule', {scaleX: 1, ease: 'none'}, 0);
        if(config.featured) gsap.to('.showcase-media', { yPercent: -7, ease: 'none', scrollTrigger: {trigger: '.showcase', start: 'top bottom', end: 'bottom top', scrub: true} });
      });
    }, root.current);
    // Image dimensions are reserved in CSS; refresh after decoded media and fonts settle.
    const refresh = () => window.ScrollTrigger?.refresh();
    void document.fonts.ready.then(refresh);
    window.addEventListener('load', refresh);
    return () => {window.removeEventListener('load',refresh);media.revert();context.revert();};
  }, [config.featured,config.services]);
  useLayoutEffect(() => {
    if(!chapterImage.current || reduced || !window.gsap) return;
    const tween = window.gsap.fromTo(chapterImage.current, {opacity: 0, scale: 1.055}, {opacity: 1, scale: 1, duration: 1.05, ease:'power2.out'});
    return () => tween.kill();
  }, [active,reduced]);
  const select = (index:number) => {if(index===active)return;setPrevious(active);setActive((index+chapters.length)%chapters.length);};
  return <div ref={root} className="cinematic-home">
    <FilmHero config={config} onBrowse={onBrowse} onTrade={onTrade}/>
    <section className="drive-manifesto" id="the-drive" aria-label="Our approach">
      <div className="manifesto-backdrop"><img className="manifesto-image" src="/media/adventure.jpg" alt="Original adventure SUV concept on an alpine road" loading="lazy"/><div/></div>
      <div className="manifesto-content"><span className="micro">01 / A DIFFERENT KIND OF DRIVE</span><h2><span className="manifesto-word">Some cars take</span><br/><span className="manifesto-word">you places.</span><br/><span className="manifesto-word bright">Others move you.</span></h2><div className="manifesto-rule"/><div className="manifesto-foot"><p>For the everyday. For the extraordinary.<br/>A carefully chosen collection.<br/>A refreshingly human experience.</p><button className="round-link" aria-label="Browse all vehicles" onClick={()=>onBrowse()}><ArrowUpRight size={28}/></button></div></div>
      <span className="vertical-note">A HIGHER STANDARD OF EVERYDAY</span>
    </section>
    {config.featured&&<><section className="showcase" aria-label="Interactive vehicle collection">
      <div className="showcase-head"><div><p className="micro">02 / FIND YOUR FREQUENCY</p><h2>Different drives.<br/>Same <em>feeling.</em></h2></div><button className="understated" onClick={()=>onBrowse()}>Explore all vehicles <ArrowUpRight size={18}/></button></div>
      <div className="showcase-stage">
        <div className="showcase-media" aria-hidden="true">{previous!==null&&<img className="showcase-previous" src={chapters[previous].image} alt=""/>}<img ref={chapterImage} key={active} className="showcase-image" src={chapter.image} alt="" loading="lazy"/><div className="showcase-gradient"/></div>
        <div className="showcase-number" aria-hidden="true">{chapter.number}</div>
        <div className="showcase-caption" aria-live="polite" aria-atomic="true"><p className="micro">{chapter.sub}</p><h3>{chapter.title.split('\n').map((line,i)=><span key={line}>{i>0&&<br/>}{line}</span>)}</h3><p>{chapter.description}</p></div>
        <div className="showcase-vehicle"><span className="micro">FEATURED FROM OUR FICTIONAL INVENTORY</span><strong>{chapter.vehicle.year} {chapter.vehicle.make} {chapter.vehicle.model}</strong><span>From {money(chapter.vehicle.price)} <span aria-hidden="true">/</span> {chapter.spec}</span><button className="film-cta" onClick={()=>onVehicle(chapter.vehicle)}>Explore vehicle <ArrowUpRight size={18}/></button></div>
        <div className="showcase-navigation"><div role="group" aria-label="Choose vehicle collection">{chapters.map((item,i)=><button key={item.label} aria-pressed={active===i} className={active===i?'active':''} onClick={()=>select(i)}><span>{item.number}</span>{item.label}</button>)}</div><div className="showcase-arrows"><button aria-label="Previous collection" onClick={()=>select(active-1)}><ChevronLeft size={20}/></button><button aria-label="Next collection" onClick={()=>select(active+1)}><ChevronRight size={20}/></button></div></div>
      </div><p className="media-note">Original concept visuals. Illustrative only; not photographs of the listed vehicles.</p>
    </section>
    <section className="edit-section"><div className="edit-heading reveal"><div><p className="micro">03 / THE CURATED EDIT</p><h2>Your next chapter.<br/>In the metal.</h2></div><button className="understated" onClick={()=>onBrowse()}>Shop all {inventory.length} vehicles <ArrowUpRight size={18}/></button></div><div className="vehicle-grid">{inventory.slice(0,3).map(renderCard)}</div><p className="fine">Fictional inventory. Concept imagery. *Payment estimates: $5,000 down, 6.9% APR, 60 months. Taxes and fees excluded.</p></section></>}
    <section className="finder-section reveal"><div><span className="micro">LESS SEARCHING. MORE DRIVING.</span><h2>What moves you?</h2></div><div className="finder-options"><button onClick={()=>onBrowse('New')}>New vehicles <ArrowUpRight/></button><button onClick={()=>onBrowse('Pre-owned')}>Pre-owned <ArrowUpRight/></button><button onClick={()=>onBrowse('Certified')}>Certified <ArrowUpRight/></button></div><form className="cinema-search" onSubmit={e=>{e.preventDefault();onSearch(search);}}><label>Make<select value={search.make||''} onChange={e=>setSearch({...search,make:e.target.value})}><option value="">All makes</option>{[...new Set(inventory.map(v=>v.make))].map(make=><option key={make}>{make}</option>)}</select></label><label>Budget<select value={search.price||''} onChange={e=>setSearch({...search,price:e.target.value})}><option value="">Any price</option><option value="30000">Under $30,000</option><option value="50000">Under $50,000</option><option value="75000">Under $75,000</option></select></label><button className="primary" type="submit">Find my vehicle <ArrowRight size={16}/></button></form></section>
    {config.services&&<section className="ownership-editorial"><div className="ownership-title reveal"><p className="micro">04 / BEYOND THE DRIVE</p><h2>The details.<br/><em>Considered.</em></h2><p>From the first conversation<br/>to the miles that follow.</p></div><div className="ownership-rows">{[['01','Your terms. Your pace.','Explore financing','finance'],['02','A new beginning.','Value your trade','trade'],['03','For the miles ahead.','Discover service & care','service']].map(([n,title,link,page])=><button key={n} className="reveal" onClick={()=>page==='trade'?onTrade():onNavigate(page)}><span className="micro">{n}</span><div><h3>{title}</h3><span>{link}</span></div><ArrowUpRight size={25}/></button>)}</div></section>}
    <section className="last-word reveal"><p className="micro">GOOD ROADS. GOOD COMPANY.</p><h2>Let’s go<br/><em>somewhere.</em></h2><button className="film-cta" onClick={()=>onNavigate('about')}>Meet your dealership <ArrowUpRight size={18}/></button></section>
  </div>;
}
