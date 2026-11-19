import React, { useState } from 'react';

/**
 * Use the approved artwork, not a hand-drawn SVG approximation.
 * Images must be uploaded to public/branding/ before this branch is published.
 * Fallback avoids a broken image while assets are being staged.
 */
export default function RocketMarkImage({ placement = 'header', className = '' }) {
  const [failed, setFailed] = useState(false);
  if (failed) return <span role="img" aria-label="Jax's Analytics logo" className={`inline-flex items-center justify-center text-[#E3C581] font-bold font-mono ${className}`}>JA</span>;
  const filename = placement === 'footer' ? 'rocket-footer.png' : 'rocket-header.png';
  return (
    <img
      src={`/branding/${filename}`}
      alt="Jax's Analytics rocket monogram"
      className={`object-contain ${className}`}
      width={placement === 'footer' ? 112 : 64}
      height={placement === 'footer' ? 128 : 78}
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}
