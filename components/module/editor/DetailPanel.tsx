type DetailPanelProps = {
  selectedNodeId?: string;
  nodes: any[];
  setNodes: any;
};

const DetailPanel = ({ selectedNodeId, nodes, setNodes }: DetailPanelProps) => {
  const node = nodes.filter((node) => node.id === selectedNodeId)[0];

  const updateNodeLabel = (value: string) => {
    const index = nodes.findIndex((nodeI) => nodeI.id === node.id);
    const arrayCopy = [...nodes];
    arrayCopy[index].data.label = value;
    setNodes(arrayCopy);
  };

  if (node?.data?.label) {
    return (
      <div className='h-full w-80 border-l-[1.5px] border-l-bPurple bg-bLight p-5'>
        <p className='text-[black]'>{node.data.label}</p>
        <input
          className='bg-bLightPurple text-[black]'
          value={node.data.label}
          onChange={(event) => updateNodeLabel(event.target.value)}
        ></input>
      </div>
    );
  }

  return (
    <div className='h-full w-80 border-l-[1.5px] border-l-bPurple bg-bLight p-5'>
      <p className='text-[black]'>test</p>
    </div>
  );
};

export default DetailPanel;
