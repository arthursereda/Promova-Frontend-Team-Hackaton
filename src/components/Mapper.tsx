import { FC } from 'react';

import { DataItem } from '@/types/content';

import Switcher from '@/components/Switcher';

interface MapperProps {
  data: DataItem[];
}

const Mapper: FC<MapperProps> = ({ data }) => {
  return (
    <div>
      {data.map((item, index) => (
        <Switcher item={item} key={index} />
      ))}
    </div>
  );
};

export default Mapper;
