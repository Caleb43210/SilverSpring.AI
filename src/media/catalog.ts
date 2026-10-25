import manifest from '../../public/media/manifest.json';
export const mediaManifest = manifest;
export type MediaAsset = typeof manifest.assets[number];
export const missingPhoto = '/media/photo-unavailable.svg';
export function mediaAsset(id: string): MediaAsset { const asset = manifest.assets.find(item => item.id === id); if (!asset) throw new Error(`Unknown media asset: ${id}`); return asset; }
export function mediaUrl(id: string) { const asset = mediaAsset(id); return asset.localAvailable ? asset.localPath : asset.remoteUrl; }
export function vehicleMedia(vehicleId: number) { return manifest.assets.filter(asset => asset.vehicleId === vehicleId && asset.kind === 'image'); }
export function migrateMediaConfig<T extends {hero: string; video: string}>(config:T):T {
  return {...config, hero: ['/media/grand-tourer.jpg','/media/adventure.jpg',mediaAsset('hero-poster').remoteUrl].includes(config.hero) ? mediaUrl('hero-poster') : config.hero, video: ['/media/driving-study.mp4',mediaAsset('hero-film').remoteUrl].includes(config.video) ? mediaUrl('hero-film') : config.video};
}
