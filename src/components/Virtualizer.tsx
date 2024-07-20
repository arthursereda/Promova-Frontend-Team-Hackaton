import {useVirtualizer} from '@tanstack/react-virtual';
import {FC, useRef} from 'react';

import {DataItem} from '@/types/content';

import Switcher from '@/components/Switcher';

import useAutoScroll from '@/utils/useAutoScroll';
import useWindowHeight from '@/utils/useWindowHeight';
import Progress from "@/components/Progress";

interface MapperProps {
    data: DataItem[];
}

const Virtualizer: FC<MapperProps> = ({data}) => {
    const parentRef = useRef(null);
    useAutoScroll(parentRef);

    const {windowHeight} = useWindowHeight();
    const virtualizer = useVirtualizer({
        count: data.length,
        getScrollElement: () => parentRef.current,
        estimateSize: () => 500,
        overscan: 10,
    });

    let offset = virtualizer.scrollOffset || 0
    let size = virtualizer.getTotalSize()

    let scrollProgress = (offset / size) * 100

    return (
        <>
            <Progress width={scrollProgress}/>
            <div
                ref={parentRef}
                style={{
                    height: windowHeight,
                    overflowY: 'auto',
                }}
                className="scrollbar-custom"
            >
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
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                transform: `translateY(${virtualItem.start}px)`,
                            }}
                        >
                            <Switcher item={data[virtualItem.index]}/>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Virtualizer;
