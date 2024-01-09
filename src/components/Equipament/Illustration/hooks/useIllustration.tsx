import { IllustrationHooksProps } from '../type';
import scss from '@styles/components/illustration.module.scss';

export function useIllustration({ titles }: IllustrationHooksProps) {
  const bullet = function (index: number, className: string) {

    if (!titles[index]) return '';
    
    return (
      `<li class="${scss.sport_illustration_nav_ul_li} ${className}">` +
      titles[index] +
      '</li>'
    );
  };

  return {
    bullet,
  };
}
