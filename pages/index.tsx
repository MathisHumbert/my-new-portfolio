import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';

import { HomeData } from '../utils/type';
import { home_data } from '../utils/data';

import Navbar from '../components/home/Navbar';
import Header from '../components/home/Header';

export default function Home({ data }: { data: HomeData }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <>
        <Navbar />
        <Header header_data={data.header_data} />
      </>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      data: home_data,
      ...(await serverSideTranslations(locale!)),
    },
  };
};
