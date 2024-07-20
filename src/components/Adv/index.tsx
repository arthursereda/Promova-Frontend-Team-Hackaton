import { FC } from 'react';

import { AdvItem } from '@/types/content';

type Props = Omit<AdvItem, 'type'>;
const Adv: FC<Props> = ({ id }) => <div>Advertisement: {id}</div>;

export default Adv;
