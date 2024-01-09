import { SVGProps } from 'react';

export default function CollapseArrow({
  width = '16',
  height = '16',
  viewBox = '0 0 512 512',
  fill = "#fff",
  ...rest
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      width={width}
      viewBox={viewBox}
      fill={fill}
      {...rest}
    >
      <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
    </svg>
  );
}
