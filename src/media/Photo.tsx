import { useState } from 'react';
import { mediaAsset, mediaUrl, missingPhoto } from './catalog';

type Props = { assetId?: string; src?: string; alt?: string; className?: string; eager?: boolean };
export function Photo({assetId,src,alt,className,eager=false}:Props) {
  const asset = assetId ? mediaAsset(assetId) : undefined;
  const preferred = src || (assetId ? mediaUrl(assetId) : missingPhoto);
  const [failed, setFailed] = useState<string[]>([]);
  const candidate = !failed.includes(preferred) ? preferred : asset && !failed.includes(asset.remoteUrl) ? asset.remoteUrl : missingPhoto;
  const unavailable = candidate === missingPhoto;
  return <img src={candidate} alt={unavailable?'Vehicle photograph unavailable':alt||asset?.title||''} className={className} loading={eager?'eager':'lazy'} fetchPriority={eager?'high':'auto'} decoding="async" onError={()=>{if(candidate!==missingPhoto)setFailed(values=>[...values,candidate]);}}/>;
}
