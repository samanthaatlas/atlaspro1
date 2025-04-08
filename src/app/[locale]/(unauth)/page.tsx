import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { IndexPage } from '@/templates/IndexPage';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Index');

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function Page() {
  return <IndexPage />;
}
