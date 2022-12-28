import nodeTypes from '../../../data/nodeTypes';

type DetailPanelProps = {
  selectedNodeId?: string;
};

const DetailPanel = ({ selectedNodeId }: DetailPanelProps) => {
  const node = nodeTypes.filter((nodeType) => nodeType.id === selectedNodeId)[0];

  if (node) {
    return (
      <div className='h-full w-80 bg-bLight border-l-2 border-l-bPurple p-5'>
        <p className='text-bBright'>{node.name}</p>
      </div>
    );
  }

  return (
    <div className='h-full w-80 bg-bLight border-l-2 border-l-bPurple p-5'>
      <p className='text-bBright'>test</p>
    </div>
  );
};

export default DetailPanel;
