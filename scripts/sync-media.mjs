import {readFileSync,writeFileSync,renameSync,mkdirSync,existsSync,unlinkSync} from 'node:fs';
import {spawnSync} from 'node:child_process';
import {createHash} from 'node:crypto';
import {resolve,dirname} from 'node:path';

const root=resolve(import.meta.dirname,'..');
const manifestPath=resolve(root,'public/media/manifest.json');
const manifest=JSON.parse(readFileSync(manifestPath,'utf8'));
const check=process.argv.includes('--check');
const hasFfmpeg=spawnSync('ffmpeg',['-version'],{stdio:'ignore'}).status===0;
let downloaded=0;
function save(){const temp=manifestPath+'.tmp';writeFileSync(temp,JSON.stringify(manifest,null,2)+'\n');renameSync(temp,manifestPath);}
if(check){console.log(JSON.stringify({local:manifest.assets.filter(a=>a.localAvailable&&existsSync(resolve(root,'public'+a.localPath))).length,remote:manifest.assets.filter(a=>!a.localAvailable).map(a=>a.id),unfilled:manifest.pending},null,2));process.exit(0);}
for(const asset of manifest.assets){
  if(!asset.commercialUse || !asset.sourceUrl || !asset.licenseUrl || !asset.author)throw new Error(`Incomplete license record: ${asset.id}`);
  const url=new URL(asset.remoteUrl);
  if(url.protocol!=='https:'||!['thumb.wikimedia.org','upload.wikimedia.org','images.pexels.com','videos.pexels.com'].includes(url.hostname))throw new Error(`Unapproved download host: ${url.hostname}`);
  const destination=resolve(root,'public'+asset.localPath);
  if(!destination.startsWith(resolve(root,'public/media')+'/'))throw new Error('Invalid destination');
  if(asset.localAvailable&&existsSync(destination))continue;
  if(asset.kind==='video'&&!hasFfmpeg){console.error('Film remains on demand: install ffmpeg to create a bounded, optimized local loop, then rerun media:sync. The UHD original will not be enabled for autoplay.');continue;}
  mkdirSync(dirname(destination),{recursive:true});
  const temporary=destination+'.download';
  console.log(`Downloading ${asset.id} from ${url.hostname}`);
  // curl uses the system's configured proxy and CA trust. Never bypass it.
  const result=spawnSync('curl',['--fail','--location','--proto','=https','--connect-timeout','10','--max-time','90','--silent','--show-error','--user-agent','WebsiteAI-Demo-Media/1.0 (attributed commercial demo)','--output',temporary,url.href],{stdio:'inherit'});
  if(result.status!==0){if(existsSync(temporary))unlinkSync(temporary);console.error('Download failed. Existing licensed remote URLs remain active; no substitute was generated.');process.exitCode=1;break;}
  const input=readFileSync(temporary);
  if(asset.kind==='image'&&!(input[0]===0xff&&input[1]===0xd8)){unlinkSync(temporary);throw new Error(`Expected JPEG, got another response for ${asset.id}`);}
  if(asset.kind==='video'){
    const encoded=destination+'.encoded.mp4';
    const ffmpeg=spawnSync('ffmpeg',['-hide_banner','-loglevel','error','-y','-i',temporary,'-t','12','-vf','scale=1280:-2,fps=24','-c:v','libx264','-preset','medium','-crf','25','-pix_fmt','yuv420p','-an','-movflags','+faststart',encoded],{stdio:'inherit'});
    unlinkSync(temporary);
    if(ffmpeg.status!==0){if(existsSync(encoded))unlinkSync(encoded);throw new Error('Video encode failed; original was not enabled for autoplay.');}
    renameSync(encoded,destination);
  } else renameSync(temporary,destination);
  const bytes=readFileSync(destination);
  asset.localAvailable=true;asset.status='downloaded-and-format-checked';asset.bytes=bytes.length;asset.sha256=createHash('sha256').update(bytes).digest('hex');asset.downloadedOn=new Date().toISOString();
  downloaded++;
  manifest.deliveryNote=`${manifest.assets.filter(a=>a.localAvailable).length}/${manifest.assets.length} assets imported locally. Sources and licenses verified from published pages. Browser playback and visual matching still require local review.`;
  save();
}
console.log(`Imported ${downloaded} assets. Use npm run media:audit to review outstanding downloads and photography gaps.`);
