import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { CenteredFooter } from '@/features/landing/CenteredFooter';
import { Section } from '@/features/landing/Section';
import { AppConfig } from '@/utils/AppConfig';

import { Logo } from './Logo';

export const Footer = () => {
  const t = useTranslations('Footer');

  return (
    <Section className="pb-16 pt-0">
      <CenteredFooter
        logo={<Logo />}
        name={AppConfig.name}
        iconList={<></>}
        legalLinks={(
          <>
            <li>
              <Link href="/sign-up" className="text-[#B0B0B0] hover:text-[#49E59A] transition-colors">{t('terms_of_service')}</Link>
            </li>
            <li>
              <Link href="/sign-up" className="text-[#B0B0B0] hover:text-[#49E59A] transition-colors">{t('privacy_policy')}</Link>
            </li>
          </>
        )}
      >
        <li className="text-[#B0B0B0] hover:text-[#49E59A] transition-colors">
          <Link href="/sign-up">{t('product')}</Link>
        </li>

        <li className="text-[#B0B0B0] hover:text-[#49E59A] transition-colors">
          <Link href="/sign-up">{t('docs')}</Link>
        </li>

        <li className="text-[#B0B0B0] hover:text-[#49E59A] transition-colors">
          <Link href="/sign-up">{t('blog')}</Link>
        </li>

        <li className="text-[#B0B0B0] hover:text-[#49E59A] transition-colors">
          <Link href="/sign-up">{t('community')}</Link>
        </li>

        <li className="text-[#B0B0B0] hover:text-[#49E59A] transition-colors">
          <Link href="/sign-up">{t('company')}</Link>
        </li>
      </CenteredFooter>
    </Section>
  );
};
