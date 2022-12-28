'use client';

import 'reactflow/dist/base.css';
import { useCallback, useRef, useState, useMemo } from 'react';
import BuilderNode from '../../atom/BuilderNode';

import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  useEdgesState,
  Connection,
  Edge,
  ConnectionLineType,
} from 'reactflow';
import { ReactFlowInstance } from '@reactflow/core/dist/esm/types/instance';

const GridEditor = ({
  setSelectedNodeId,
  nodes,
  setNodes,
  onNodesChange,
}: {
  setSelectedNodeId: any;
  nodes: any;
  setNodes: any;
  onNodesChange: any;
}) => {
  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const [reactFlowInstance, setReactFlowInstance] = useState<ReactFlowInstance | null>(null);

  const [edges, setEdges] = useEdgesState([]);

  const nodeTypes = useMemo(() => ({ builderNode: BuilderNode }), []);

  const onDrop = (event: any) => {
    if (!reactFlowWrapper.current || !reactFlowInstance) return;

    const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
    const newNodePosition = reactFlowInstance.project({
      x: event.clientX - reactFlowBounds.left,
      y: event.clientY - reactFlowBounds.top,
    });

    let id = event.dataTransfer.getData('id');

    const newNode = {
      id: Math.random().toString(),
      type: 'builderNode',
      position: { x: newNodePosition.x - 50, y: newNodePosition.y },
      data: { label: `${id}`, id: `${id}` },
    };

    //@ts-ignore
    setNodes((nodes) => [...nodes, newNode]);
  };

  const onConnect = useCallback(
    (params: Edge | Connection) =>
      setEdges((els) => addEdge({ ...params, type: 'smoothstep' }, els)),
    [setEdges],
  );

  const onNodeClick = (node: any) => {
    setSelectedNodeId(node.id);
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
