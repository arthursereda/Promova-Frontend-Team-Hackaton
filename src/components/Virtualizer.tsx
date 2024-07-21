import { useWindowVirtualizer } from '@tanstack/react-virtual';
import { FC, useEffect, useRef } from 'react';

import { ArticleItem, DataItem } from '@/types/content';

import Progress from '@/components/Progress';
import Switcher from '@/components/Switcher';
import TopVideo from '@/components/TopVideo';

import useAutoScroll from '@/hooks/useAutoScroll';
import useShowVideo from '@/hooks/useShowVideo';
import appendVidazoo from '@/utils/appendVidazoo';

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
    overscan: 5,
    scrollMargin: parentRef.current?.offsetTop ?? 0,
  });
  const isShowVideo = useShowVideo();

  const offset = virtualizer.scrollOffset || 0;
  const size = virtualizer.getTotalSize() - SIZE_OFFSET_TO_FILL_PROGRESS;
  const scrollProgress = (offset / size) * 100;

  useEffect(() => {
    appendVidazoo('vidazoo');
  }, []);

  return (
    <>
      {!isShowVideo && <TopVideo />}
      <Progress width={scrollProgress} />
      <div ref={parentRef}>
        <div
          style={{
            height: `${virtualizer.getTotalSize()}px`,
            width: '100%',
            position: 'relative',
          }}
        >
          {virtualizer.getVirtualItems().map((virtualItem) => (
            <div
              key={virtualItem.key}
              ref={(el) => {
                if (el) {
                  virtualItem.measureElement(el);
                  new ResizeObserver(() => virtualItem.measureElement(el)).observe(el);
                }
              }}
              data-index={virtualItem.index}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                transform: `translateY(${virtualItem.start}px)`,
              }}
            >
              <Switcher item={data[virtualItem.index]} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Virtualizer;
