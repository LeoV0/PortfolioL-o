import { useState, ImgHTMLAttributes } from 'react';

interface OptimizedImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  src: string;
  alt: string;
  webpSrc?: string;
  fallbackSrc?: string;
  aspectRatio?: string;
  loading?: 'lazy' | 'eager';
  onLoadComplete?: () => void;
}


export function OptimizedImage({
  src,
  alt,
  webpSrc,
  fallbackSrc,
  aspectRatio,
  loading = 'lazy',
  onLoadComplete,
  className = '',
  ...props
}: OptimizedImageProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleLoad = () => {
    setImageLoaded(true);
    onLoadComplete?.();
  };

  const handleError = () => {
    setImageError(true);
  };

  if (webpSrc && !imageError) {
    return (
      <div 
        className={`relative overflow-hidden ${className}`}
        style={{ aspectRatio: aspectRatio || 'auto' }}
      >
        {!imageLoaded && (
          <div 
            className="absolute inset-0 bg-neutral-200 animate-pulse"
            aria-hidden="true"
          />
        )}

        <picture>
          <source srcSet={webpSrc} type="image/webp" />
          
          <img
            src={src}
            alt={alt}
            loading={loading}
            onLoad={handleLoad}
            onError={handleError}
            className={`
              w-full h-full object-cover transition-opacity duration-500
              ${imageLoaded ? 'opacity-100' : 'opacity-0'}
            `}
            {...props}
          />
        </picture>
      </div>
    );
  }

  return (
    <div 
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio: aspectRatio || 'auto' }}
    >
      {!imageLoaded && (
        <div 
          className="absolute inset-0 bg-neutral-200 animate-pulse"
          aria-hidden="true"
        />
      )}

      <img
        src={imageError && fallbackSrc ? fallbackSrc : src}
        alt={alt}
        loading={loading}
        onLoad={handleLoad}
        onError={handleError}
        className={`
          w-full h-full object-cover transition-opacity duration-500
          ${imageLoaded ? 'opacity-100' : 'opacity-0'}
        `}
        {...props}
      />
    </div>
  );
}


export function usePreloadImages(imageUrls: string[]) {
  useState(() => {
    imageUrls.forEach((url) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = url;
      document.head.appendChild(link);
    });
  });
}


export function getWebPPath(originalPath: string): string {
  return originalPath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
}


export function generateSrcSet(basePath: string, widths: number[]): string {
  return widths
    .map((width) => {
      const ext = basePath.split('.').pop();
      const pathWithoutExt = basePath.replace(`.${ext}`, '');
      return `${pathWithoutExt}-${width}w.${ext} ${width}w`;
    })
    .join(', ');
}