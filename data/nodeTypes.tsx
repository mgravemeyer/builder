import { NodeType } from '../types/types';
import { triggersStandard } from './triggers/triggersStandard';
import { triggersGitHub } from './triggers/triggersGitHub';
import { coreStandard } from './core/coreStandard';
import { helpersStandard } from './helpers/helpersStandard';

const nodeTypes: NodeType[] = [
  ...triggersStandard,
  ...triggersGitHub,
  ...coreStandard,
  ...helpersStandard,
];

export default nodeTypes;
