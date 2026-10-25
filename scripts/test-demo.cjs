const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const {execFileSync}=require('node:child_process');
const out=path.resolve('work/test-current');
execFileSync(process.execPath,['node_modules/typescript/bin/tsc','src/dealership/data.ts','--outDir',out,'--module','commonjs','--target','es2020','--skipLibCheck','--resolveJsonModule','--esModuleInterop','--moduleResolution','node'],{stdio:'inherit'});
fs.writeFileSync(path.join(out,'package.json'),JSON.stringify({type:'commonjs'}));
const {inventory,filterInventory,payment,defaultConfig}=require(path.join(out,'src/dealership/data.js'));
const {migrateMediaConfig,mediaManifest}=require(path.join(out,'src/media/catalog.js'));
assert.equal(inventory.length,8);
for(const [key,val] of Object.entries({make:'Toyota',model:'X5',body:'SUV',year:'2024',mileage:'10000',price:'35000',condition:'Certified'})) {
 const found=filterInventory({[key]:val});assert.ok(found.length>0);
 assert.ok(found.every(v=>['price','mileage'].includes(key)?v[key]<=+val:key==='year'?v.year>=+val:v[key]===val));
}
assert.equal(filterInventory({make:'Toyota',price:'30000'})[0].model,'Camry');
assert.equal(filterInventory({make:'Porsche',price:'30000'}).length,0);
assert.equal(payment(30000,6000,0,60),400);assert.equal(payment(30000,30000,6.9,60),0);
assert.ok(Math.abs(payment(36950,5000,6.9,60)-631.16)<1);
const ids=new Set();
for(const asset of mediaManifest.assets){assert.ok(!ids.has(asset.id));ids.add(asset.id);assert.ok(asset.commercialUse&&asset.author&&asset.license&&asset.sourceUrl&&asset.licenseUrl);assert.equal(new URL(asset.remoteUrl).protocol,'https:');assert.ok(asset.matchNote);if(asset.localAvailable)assert.ok(fs.existsSync('public'+asset.localPath));else assert.equal(asset.status,'source-verified-download-pending');}
for(const vehicle of inventory){assert.ok(vehicle.mediaIds.length);for(const id of vehicle.mediaIds){const a=mediaManifest.assets.find(a=>a.id===id);assert.equal(a.vehicleId,vehicle.id);assert.equal(a.kind,'image');}assert.ok(vehicle.mediaIds.some(id=>id.endsWith('-exterior')));const interior=vehicle.mediaIds.some(id=>id.endsWith('-interior'));if(!interior)assert.ok(mediaManifest.pending.some(p=>p.vehicleId===vehicle.id&&p.slot==='interior'));}
const migrated=migrateMediaConfig({...defaultConfig,name:'Custom Dealer',hero:'/media/grand-tourer.jpg',video:'/media/driving-study.mp4'});assert.equal(migrated.hero,defaultConfig.hero);assert.equal(migrated.video,defaultConfig.video);assert.equal(migrated.name,'Custom Dealer');assert.equal(migrateMediaConfig({...defaultConfig,hero:'https://example.com/own.jpg'}).hero,'https://example.com/own.jpg');
for(const retired of ['grand-tourer.jpg','adventure.jpg','driving-study.mp4'])assert.ok(!fs.existsSync('public/media/'+retired));
assert.ok(fs.existsSync('public/media/photo-unavailable.svg'));
const context=vm.createContext({console,setTimeout,clearTimeout});context.self=context;
vm.runInContext(fs.readFileSync('public/vendor/gsap.min.js','utf8'),context);
vm.runInContext(fs.readFileSync('public/vendor/ScrollTrigger.min.js','utf8'),context);
assert.equal(context.window.gsap.version,'3.13.0');assert.equal(context.window.ScrollTrigger.version,'3.13.0');
if(fs.existsSync('dist/index.html')){const html=fs.readFileSync('dist/index.html','utf8');assert.ok(html.includes('/vendor/gsap.min.js'));assert.ok(html.includes('/vendor/ScrollTrigger.min.js'));assert.ok(fs.existsSync('dist/media/manifest.json'));}
console.log('PASS: existing inventory, payment and GSAP checks; license manifest, vehicle-gallery binding, missing-interior reporting, retired-AI removal, customization migration and build assets.');
console.log('External downloads/playback are NOT tested. Pending local downloads: '+mediaManifest.assets.filter(a=>!a.localAvailable).length);
