import { useWindowVirtualizer } from '@tanstack/react-virtual';
import { CSSProperties, FC, useEffect, useRef } from 'react';

import { ArticleItem } from '@/types/content';

import Progress from '@/components/Progress';
import Switcher from '@/components/Switcher';
import TopVideo from '@/components/TopVideo';

import useAutoScroll from '@/hooks/useAutoScroll';
import useShowVideo from '@/hooks/useShowVideo';
import appendVidazoo from '@/utils/appendVidazoo';

import VirtualizeWrapper from './VirtualizeWrapper';

interface MapperProps {
  data: ArticleItem[];
}

const SIZE_OFFSET_TO_FILL_PROGRESS = 720;

const Virtualizer: FC<MapperProps> = ({ data }) => {
  useAutoScroll();

  const parentRef = useRef<HTMLDivElement | null>(null);
  const virtualizer = useWindowVirtualizer({
    count: data.length,
    estimateSize: () => 35,
    overscan: 10,
    scrollMargin: parentRef.current?.offsetTop ?? 0,
  });
  const isShowVideo = useShowVideo();

  useEffect(() => {
    appendVidazoo('vidazoo');
  }, []);

  const offset = virtualizer.scrollOffset || 0;
  const size = virtualizer.getTotalSize() - SIZE_OFFSET_TO_FILL_PROGRESS;
  const scrollProgress = (offset / size) * 100;

  const virtualizerStyles: CSSProperties = {
    height: `${virtualizer.getTotalSize()}px`,
    width: '100%',
    position: 'relative',
  };

  return (
    <>
      {!isShowVideo && <TopVideo />}
      <Progress width={scrollProgress} />
      <div ref={parentRef} className="scrollbar-custom">
        <div style={virtualizerStyles}>
          {virtualizer.getVirtualItems().map((virtualItem) => (
            <VirtualizeWrapper virtualItem={virtualItem} key={virtualItem.key}>
              <Switcher item={data[virtualItem.index]} />
            </VirtualizeWrapper>
          ))}
        </div>
      </div>
    </>
  );
};

export default Virtualizer;
