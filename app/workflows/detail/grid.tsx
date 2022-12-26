'use client';

import 'reactflow/dist/base.css';
import { useCallback } from 'react';

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
import { Connector } from '../../../types/types';

type GridProps = {
    connectors: Node<[]>[],
    onChange: any
}

const Grid = ({ connectors, onChange } : GridProps) => {

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

    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);


    const onConnect = useCallback((params: Edge<any> | Connection) => setEdges((els) => addEdge(params, els)), []);

    return (
        <ReactFlow
            style={{  }}
            nodes={connectors}
            edges={edges}
            onNodesChange={onChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            fitView
        >
            <Background />
            <Controls />
            <MiniMap />
        </ReactFlow>
    );
}

export default Grid;