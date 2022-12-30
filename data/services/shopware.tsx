import { SiShopware } from 'react-icons/si';
import { NodeType } from '../../types/types';

export const shopware: NodeType[] = [
  {
    id: 'shopwareCreateOrder',
    name: 'Create Order',
    icon: <SiShopware size={24} color={'black'} />,
    category: 'services',
    subCategory: 'shopware',
    hasInput: true,
    hasOutput: true,
  },
  {
    id: 'shopwareCreateProduct',
    name: 'Create Product',
    icon: <SiShopware size={24} color={'black'} />,
    category: 'services',
    subCategory: 'shopware',
    hasInput: true,
    hasOutput: true,
  },
  {
    id: 'shopwareCreateCustomer',
    name: 'Create Customer',
    icon: <SiShopware size={24} color={'black'} />,
    category: 'services',
    subCategory: 'shopware',
    hasInput: true,
    hasOutput: true,
  },
];
