import Image from 'next/image';

type BannerProps = {
  src: string;
  alt?: string;
};

export function Banner({ src, alt = 'Banner' }: BannerProps) {
  return (
    <main>
      <div className="brasilarco">
        <div className="sport_content_banner">
          <Image
            loader={() => src}
            src={src}
            alt={alt}
            width="117.9vw"
            height="15vh"
            layout="responsive"
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
    </main>
  );
}
