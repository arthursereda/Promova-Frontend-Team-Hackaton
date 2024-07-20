import { GetServerSideProps, NextPage } from 'next';
import { Inter } from 'next/font/google';

import { ArticleResponse, DataItem } from '@/types/content';

import Mapper from '@/components/Mapper';

import { ARTICLE_URL } from '@/config/constants/urls';

const inter = Inter({ subsets: ['latin'] });

type Props = {
  data: DataItem[];
};

const Home: NextPage<Props> = ({ data }) => {
  return (
    <main className={`${inter.className}`}>
      <Mapper data={data} />
    </main>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(ARTICLE_URL);
  const data: ArticleResponse = await res.json();

  return {
    props: {
      data: data?.data,
    },
  };
};

export default Home;
