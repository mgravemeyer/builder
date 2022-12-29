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

  if (node?.data?.id) {
    return (
      <div className='h-full min-w-[400px] border-l-[1.5px] border-l-bPurple bg-bLight p-5'>
        <p className='text-3xl text-[black]'>{node.data.id}</p>
        <input
          className='bg-bLightPurple text-[black]'
          value={node.data.id}
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
