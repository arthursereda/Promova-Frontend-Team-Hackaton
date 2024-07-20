import {FC, useRef} from "react";
import {DataItem} from "@/types/content";
import {useVirtualizer} from "@tanstack/react-virtual";
import Switcher from "@/components/Switcher";

interface MapperProps {
	data: DataItem[];
}

const Virtualizer: FC<MapperProps> = ({ data }) => {
	// The scrollable element for your list
	const parentRef = useRef(null)

	// The virtualizer
	const rowVirtualizer = useVirtualizer({
		count: data.length,
		getScrollElement: () => parentRef.current,
		estimateSize: () => 500,
	})
	return (
		<div
			ref={parentRef}
		>
			<div
				style={{
					height: `${rowVirtualizer.getTotalSize()}px`,
					width: '100%',
					position: 'relative',
				}}
			>
				{/* Only the visible items in the virtualizer, manually positioned to be in view */}
				{rowVirtualizer.getVirtualItems().map((virtualItem) => (
					<div
						key={virtualItem.key}
						ref={virtualItem.measureElement} // вимірювання висоти елемента
						style={{
							position: "absolute",
							top: 0,
							left: 0,
							width: "100%",
							transform: `translateY(${virtualItem.start}px)`,
							borderBottom: "1px solid lightgray",
						}}
					>
						<Switcher item={data[virtualItem.index]}/>
					</div>
				))}
			</div>
		</div>
	);
}

export default Virtualizer;
