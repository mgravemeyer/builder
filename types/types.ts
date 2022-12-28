export type NodeType = {
  id: string;
  name: string;
  icon: JSX.Element;
  category: NodeCategory;
  subCategory: NodeSubCategory;
  hasInput?: boolean;
  hasOutput?: boolean;
  hasYes?: boolean;
  hasNo?: boolean;
};

export type NodeCategory = 'core' | 'triggers' | 'helpers' | 'services';
export type NodeSubCategory = 'standard' | 'gitHub';
