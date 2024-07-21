import { GetServerSideProps, NextPage } from 'next';
import { Inter } from 'next/font/google';

import { ArticleResponse, DataItem } from '@/types/content';

import ArticleWrapper from '@/components/ArticleWrapper';
import Mapper from '@/components/Mapper';

import { ARTICLE_URL } from '@/config/constants/urls';
import useAutoScroll from '@/utils/useAutoScroll';
import useScrollProgress from "@/components/hooks/useScrollProgress";
import Progress from "@/components/Progress";

const inter = Inter({ subsets: ['latin'] });

type Props = {
  data: DataItem[];
};

const OldPage: NextPage<Props> = ({ data }) => {
  useAutoScroll();

  const {scrollProgress} = useScrollProgress()
  return (
    <main className={`w-full ${inter.className}`}>
      <Progress width={scrollProgress}/>
      <ArticleWrapper>
        <Mapper data={data} />
      </ArticleWrapper>
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

export default OldPage;
