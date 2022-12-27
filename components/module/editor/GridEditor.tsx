'use client';

import 'reactflow/dist/base.css';
import { useCallback, useRef, useState } from 'react';

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
} from 'reactflow';

const GridEditor = () => {
  const initialEdges = [
    {
      id: 'e1-2',
      source: '1',
      target: '2',
    },
    {
      id: 'e1-3',
      source: '1',
      target: '3',
    },
    {
      id: 'e1-4',
      source: '1',
      target: '4',
    },
  ];

  const nodeDefaults = {
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  };

  const initialNodes = [
    {
      id: '1',
      position: { x: 0, y: 150 },
      data: { label: 'base style 1' },
      ...nodeDefaults,
    },
    { id: '2', position: { x: 250, y: 0 }, data: { label: 'base style 2' }, ...nodeDefaults },
    { id: '3', position: { x: 250, y: 150 }, data: { label: 'base style 2' }, ...nodeDefaults },
    { id: '4', position: { x: 250, y: 300 }, data: { label: 'base style 2' }, ...nodeDefaults },
  ];

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges] = useEdgesState(initialEdges);
  const [reactFlowInstance, setReactFlowInstance] = useState<any>(null);

  const reactFlowWrapper = useRef(null);

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
      position: { x: position.x, y: position.y },
      data: { label: `${id}` },
    };

    console.log(test);
    setNodes((nodes) => [...nodes, test]);
  };

  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((els) => addEdge(params, els)),
    [setEdges],
  );

  return (
    <ReactFlow
      ref={reactFlowWrapper}
      style={{}}
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onConnect={onConnect}
      fitView
      onDragOver={(event) => event.preventDefault()}
      onDrop={(event) => onDrop(event)}
      onInit={setReactFlowInstance}
    >
      <Background />
      <Controls />
      <MiniMap />
    </ReactFlow>
  );
};

export default GridEditor;
