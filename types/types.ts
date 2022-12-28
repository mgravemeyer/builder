type Output = 'success' | 'fail' | 'next' | 'input';

export type NodeType = {
  id: string;
  name: string;
  icon: JSX.Element;
  output: Output[];
};
