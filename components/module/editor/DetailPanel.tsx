import nodeTypes from '../../../data/nodeTypes';

type DetailPanelProps = {
  selectedNodeId?: string;
};

const DetailPanel = ({ selectedNodeId }: DetailPanelProps) => {
  const node = nodeTypes.filter((nodeType) => nodeType.id === selectedNodeId)[0];

  if (node) {
    return (
      <div className='h-full w-80 border-l-[1px] border-l-bPurple bg-bLight p-5'>
        <p className='text-[black]'>{node.name}</p>
      </div>
    );
  }

  return (
    <div className='h-full w-80 border-l-[1px] border-l-bPurple bg-bLight p-5'>
      <p className='text-[black]'>test</p>
    </div>
  );
};

export default DetailPanel;
