'use client';

import Image from 'next/image';

interface BrowserFrameProps {
  src: string;
  alt: string;
  domain: string;
}

export default function BrowserFrame({ src, alt, domain }: BrowserFrameProps) {
  return (
    <div className="browser-frame">
      <div className="browser-frame-bar">
        <span className="browser-frame-dot" style={{ background: '#f87171' }} />
        <span className="browser-frame-dot" style={{ background: '#fbbf24' }} />
        <span className="browser-frame-dot" style={{ background: '#34d399' }} />
        <span className="browser-frame-url mono">{domain}</span>
      </div>
      <div className="browser-frame-viewport">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 58vw"
          style={{ objectFit: 'cover', objectPosition: 'top' }}
        />
      </div>
    </div>
  );
}
