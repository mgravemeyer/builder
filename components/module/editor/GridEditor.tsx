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

  const initialNodes: Node<any>[] = [];

  const reactFlowWrapper = useRef(null);

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges] = useEdgesState(initialEdges);
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
      position: { x: position.x, y: position.y },
      data: { label: `${id}`, id: `${id}` },
    };

    console.log(test);
    setNodes((nodes) => [...nodes, test]);
  };

  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((els) => addEdge(params, els)),
    [setEdges],
  );

  return (
    <div ref={reactFlowWrapper} className='w-full h-full'>
      <ReactFlow
        nodeTypes={nodeTypes}
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
    </div>
  );
};

export default GridEditor;
