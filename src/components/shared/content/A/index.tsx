import Link from 'next/link';
import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';

type AProps = {
  href: string;
  target?: string;
  style?: any;
  passHref?: boolean;
} & DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

export function A(props: AProps) {
  const { className, children, href, target, style, download, ...rest } = props;

  return (
    <Link href={href} passHref download={download}>
      <a className={className} download={download} {...rest} target={target} style={style}>
        {children}
      </a>
    </Link>
  );
}
