import { NodeType } from '../types/types';

import { standard as triggersStandard } from './triggers/standard';
import { standard as coreStandard } from './core/standard';
import { standard as helpersStandard } from './helpers/standard';

import { gitHub as triggersGithub } from './triggers/gitHub';
import { shopware as servicesShopware } from './services/shopware';

const nodeTypes: NodeType[] = [
  ...coreStandard,
  ...triggersGithub,
  ...helpersStandard,
  ...triggersStandard,
  ...servicesShopware,
];

export default nodeTypes;
