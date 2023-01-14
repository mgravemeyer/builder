type inputType =
  | {
      type: 'textField';
      label: string;
      value: string | number;
    }
  | {
      type: 'multiSelection';
      label: string;
      value: [label: string | number];
    };

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
  inputFields?: inputType[];
};

export type NodeCategory = 'core' | 'triggers' | 'helpers' | 'services';
export type NodeSubCategory = 'standard' | 'gitHub' | 'shopware' | 'jira';
