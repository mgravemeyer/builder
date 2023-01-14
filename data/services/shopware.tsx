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
    inputFields: [
      { type: 'textField', label: 'Title', value: '' },
      { type: 'textField', label: 'Product number', value: '' },
      { type: 'textField', label: 'Manufacturer ID', value: '' },
      { type: 'textField', label: 'Description', value: '' },
    ],
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
  {
    id: 'shopwareCheckNewOrder',
    name: 'Check for new Order',
    icon: <SiShopware size={24} color={'black'} />,
    category: 'services',
    subCategory: 'shopware',
    hasInput: true,
    hasOutput: true,
  },
];
