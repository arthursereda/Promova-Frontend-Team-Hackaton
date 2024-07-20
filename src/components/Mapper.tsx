import {FC} from "react";
import Switcher from "@/components/Switcher";
import {DataItem} from "@/types/content";

interface MapperProps {
    data: DataItem[];
}

const Mapper: FC<MapperProps> = ({ data }) =>
    (
        <div>
            {data.map((item, index) =>
              <Switcher item={item} key={index}/>
            )}
        </div>
    );

export default Mapper;
