'use client';

import 'reactflow/dist/base.css';
import { useCallback, useRef, useState, useMemo } from 'react';
import TextUpdaterNode from '../../atom/Node';

import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  Connection,
  Edge,
  Position,
  Node,
  ConnectionLineType,
} from 'reactflow';

const GridEditor = ({ setSelectedNodeId }: { setSelectedNodeId: any }) => {
  const nodeDefaults = {
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  };

  const initialNodes: Node<any>[] = [];

  const reactFlowWrapper = useRef(null);

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges] = useEdgesState([]);
  const [reactFlowInstance, setReactFlowInstance] = useState<any>(null);

  const nodeTypes = useMemo(() => ({ textUpdater: TextUpdaterNode }), []);

  const onDrop = (event: any) => {
    let id = event.dataTransfer.getData('id');

    if (!reactFlowWrapper.current) return;

    //@ts-ignore
    const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();

    if (!reactFlowInstance) return;

    console.log(event.target.getBoundingClientRect());

    //@ts-ignore
    const position = reactFlowInstance.project({
      x: event.clientX - reactFlowBounds.left,
      y: event.clientY - reactFlowBounds.top,
    });

    const test = {
      id: Math.random().toString(),
      type: 'textUpdater',
      position: { x: position.x - 50, y: position.y },
      data: { label: `${id}`, id: `${id}` },
    };

    console.log(test);
    setNodes((nodes) => [...nodes, test]);
  };

  const onConnect = useCallback(
    (params: Edge | Connection) =>
      setEdges((els) => addEdge({ ...params, type: 'smoothstep' }, els)),
    [setEdges],
  );

  const onNodeClick = (node: any) => {
    setSelectedNodeId(node.data.label);
  };

  return (
    <div ref={reactFlowWrapper} className='h-full w-full'>
      <ReactFlow
        nodeTypes={nodeTypes}
        snapGrid={[15, 15]}
        onNodeClick={(event, node) => onNodeClick(node)}
        snapToGrid={true}
        nodesFocusable={false}
        edgesFocusable={false}
        connectionLineType={ConnectionLineType.SmoothStep}
        minZoom={1}
        ref={reactFlowWrapper}
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onConnect={onConnect}
        onDragOver={(event) => event.preventDefault()}
        onDrop={(event) => onDrop(event)}
        onInit={setReactFlowInstance}
      >
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
};

export default GridEditor;
