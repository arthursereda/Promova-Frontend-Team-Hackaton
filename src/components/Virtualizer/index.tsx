import { useWindowVirtualizer } from '@tanstack/react-virtual';
import { FC, useEffect, useRef } from 'react';

import { DataItem } from '@/types/content';

import Progress from '@/components/Progress';
import Switcher from '@/components/Switcher';
import TopVideo from '@/components/TopVideo';

import useAutoScroll from '@/hooks/useAutoScroll';
import useShowVideo from '@/hooks/useShowVideo';
import appendVidazoo from '@/utils/appendVidazoo';

interface MapperProps {
  data: DataItem[];
}

const Virtualizer: FC<MapperProps> = ({ data }) => {
  const parentRef = useRef<HTMLDivElement | null>(null);
  useAutoScroll();

  const virtualizer = useWindowVirtualizer({
    count: data.length,
    estimateSize: () => 35,
    overscan: 10,
    scrollMargin: parentRef.current?.offsetTop ?? 0,
  });
  const isShowVideo = useShowVideo();

  let offset = virtualizer.scrollOffset || 0;
  let size = virtualizer.getTotalSize();

  let scrollProgress = (offset / size) * 100;

  useEffect(() => {
    appendVidazoo('vidazoo');
  }, []);

  return (
    <>
      {!isShowVideo && <TopVideo />}
      <Progress width={scrollProgress} />
      <div ref={parentRef} className="scrollbar-custom">
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
              data-item={virtualItem.index}
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
