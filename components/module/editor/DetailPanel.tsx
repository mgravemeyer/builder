import nodeTypes from '../../../data/nodeTypes';
type DetailPanelProps = {
  selectedNodeId?: string;
  nodes: any[];
  setNodes: any;
};

const DetailPanel = ({ selectedNodeId, nodes, setNodes }: DetailPanelProps) => {
  const node = nodes.filter((node) => node.id === selectedNodeId)[0];
  const nodeData = nodeTypes.filter((nodeType) => nodeType.id === node?.data?.id)[0];
  console.log(node);

  const updateNodeLabel = (value: string) => {
    const index = nodes.findIndex((nodeI) => nodeI.id === node.id);
    const arrayCopy = [...nodes];
    arrayCopy[index].data.customName = value;
    setNodes(arrayCopy);
  };

  if (node?.data?.id && nodeData) {
    return (
      <div className='h-full min-w-[400px] border-l-[1.5px] border-l-bPurple bg-bLight p-5'>
        <p className='text-3xl text-[black]'>{nodeData.name}</p>
        <input
          className='bg-bLightPurple text-[black]'
          value={node.data.customName}
          onChange={(event) => updateNodeLabel(event.target.value)}
        ></input>
      </div>
    );
  }

  return (
    <div className='h-full min-w-[400px] border-l-[1.5px] border-l-bPurple bg-bLight p-5'>
      <p className='text-[black]'>test</p>
    </div>
  );
};

export default DetailPanel;
