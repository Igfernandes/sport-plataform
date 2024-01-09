import { useRouter } from 'next/router';
import { Banner } from '@components/shared/layouts/Banner';
import { Header } from '@components/shared/globals/Header';
import { Article } from '@components/News/Article';

export default function Artigo() {
  const router = useRouter();
  const { noticia } = router.query;

  return (
    <>
      <Header title="Notícias" />
      <Banner src="/img/banners/noticias.jpg" />
      <Article newsLink={String(noticia)} isPageNews={true} />
    </>
  );
}
