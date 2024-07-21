import { VirtualItem } from '@tanstack/react-virtual';
import { ReactNode } from 'react';

const VirtualizeWrapper = ({
  virtualItem,
  children,
}: {
  virtualItem: VirtualItem<Element>;
  children: ReactNode;
}) => (
  <div
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
    {children}
  </div>
);

export default VirtualizeWrapper;
