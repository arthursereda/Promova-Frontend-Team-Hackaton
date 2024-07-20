import {FC} from "react";

type Props = {
    width: number
}
const Progress: FC<Props> = ({width}) =>
    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 sticky z-10 top-0 md:top-1">
        <div className="bg-blue-600 h-2.5 rounded-full" style={{
            width: `${width}%`,
        }}></div>
    </div>

export default Progress