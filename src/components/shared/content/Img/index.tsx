import { DetailedHTMLProps, ImgHTMLAttributes } from 'react';

type ImgProps = {
  src: string;
  alt?: string;
  classPhoto?: string;
} & DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;

export function Img(props: ImgProps) {
  const { src, className, alt, classPhoto = '', width, height,...rest } = props;

  return (
    <div className={className} style={{width, height}}>
      <img src={src} alt={alt} className={`w-[100%] h-[100%] ${classPhoto}`} {...rest} />
    </div>
  );
}
