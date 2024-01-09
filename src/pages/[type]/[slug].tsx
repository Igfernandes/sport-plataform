import Adverses from '@components/Adverses';
import Files from '@components/Files';
import { When } from '@components/shared/utilities/when';
import { useNavigationContext } from '@contexts/Navigation';
import Custom404 from '@pages/404';
import { useRouter } from 'next/router';

export default function Models() {
  const router = useRouter();
  const { slug } = router.query;
  const { menu } = useNavigationContext();

  const typeModel = menu.filter((item) => item.link == slug);

  if (Array.isArray(typeModel) && typeModel.length == 0) return <Custom404 />;

  return (
    <>
      <When value={typeModel[0].tipo == 'ficheiros'}>
        <Files slug={String(slug)} />
      </When>
      <When value={typeModel[0].tipo == 'diversas'}>
        <Adverses slug={String(slug)} />
      </When>
    </>
  );
}
