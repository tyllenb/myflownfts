import useTranslation from 'next-translate/useTranslation';
import classnames from 'classnames';
import { Button, TextInput } from '../common';

export default function Header() {
  const { t } = useTranslation();
  return (
    <div
      className={classnames(
        'flex flex-col items-center justify-center',
        'h-screen gap-[2.25rem] px-5 pt-[23rem] pb-[7.25rem] bg-center bg-no-repeat bg-cover bg-header-mobile',
        'xs:bg-header-mobile-xs',
        'sm:bg-header-mobile-sm sm:justify-bottom',
        'md:pb-24',
        'lg:gap-16 lg:justify-center lg:bg-header lg:pb-[19rem]'
      )}
    >
      <h1
        className={classnames(
          'flex flex-wrap justify-center items-center font-bold text-white text-mobile-h1',
          'xs:w-[25rem] sm:w-[30rem] md:w-[54.875rem] md:text-h2 lg:text-h1'
        )}
      >
        <span>{t('pages.landing.header.welcome')}</span>
        <div className="items-center justify-center flex mx-2 sm:px-[0.625rem] pl-[0.625rem] pr-2 py-0.5 bg-primary text-inverted">
          <span>{t('pages.landing.header.next')}</span>
          <span className="ml-2 sm:hidden">
            {t('pages.landing.header.generation')}
          </span>
        </div>
        <div className="hidden sm:inline">
          <div className="flex items-center justify-center mr-2 sm:px-[0.625rem] pr-[0.625rem] py-0.5 bg-primary text-inverted">
            <span>{t('pages.landing.header.generation')} </span>
          </div>
        </div>
        <span>{t('pages.landing.header.nfts')}</span>
      </h1>
      <TextInput
        containerClassName="grid h-16 md:max-w-[40rem] lg:max-w-[50.875rem] flex-shrink w-full"
        className="placeholder:font-semibold md:placeholder:font-medium"
        placeholder={t('common.search')}
        searchBar
      />
      <div className="flex flex-col justify-center w-full gap-3 md:flex-row lg:flex-shrink-0">
        <Button href="#" className="h-[3.125rem] w-full md:w-[13.125rem]">
          {t('common.buttonConnectWallet')}
        </Button>
        <Button
          href="https://flow.com/"
          target="_blank"
          rel="noreferrer"
          className="h-[3.125rem] w-full md:w-[13.125rem]"
          variant="light"
        >
          {t('pages.landing.buttonLearnMore')}
        </Button>
      </div>
    </div>
  );
}