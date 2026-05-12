import * as React from 'react';

type ImageProps = {
  src: string | { src: string };
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  quality?: number;
  className?: string;
  style?: React.CSSProperties;
  sizes?: string;
  placeholder?: string;
  blurDataURL?: string;
  onLoad?: React.ReactEventHandler<HTMLImageElement>;
  onError?: React.ReactEventHandler<HTMLImageElement>;
};

const Image = ({ src, alt, width, height, fill, className, style }: ImageProps) => {
  const resolvedSrc = typeof src === 'object' ? src.src : src;
  const fillStyle: React.CSSProperties = fill
    ? { position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }
    : {};
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={resolvedSrc}
      alt={alt}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      className={className}
      style={{ ...fillStyle, ...style }}
    />
  );
};

export default Image;
