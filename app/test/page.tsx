"use client";
import { useState, useCallback } from "react";
import {
    ReactFlow,
    applyNodeChanges,
    applyEdgeChanges,
    addEdge,
    NodeChange,
    EdgeChange,
    Connection,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

interface Nodetype {
    id: string;
    position: {
        x: number;
        y: number;
    };
    data: {
        label: string;
    };
}

interface EdgeType {
    id: string;
    source: string;
    target: string;
}

const initialNodes = [
    { id: "n1", position: { x: 0, y: 0 }, data: { label: "Node 1" } },
    { id: "n2", position: { x: 0, y: 100 }, data: { label: "Node 2" } },
];
const initialEdges = [{ id: "n1-n2", source: "n1", target: "n2" }];

export default function Test() {
    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);

    const onNodesChange = useCallback(
        (changes: NodeChange<Nodetype>[]) =>
            setNodes((nodesSnapshot) =>
                applyNodeChanges(changes, nodesSnapshot),
            ),
        [],
    );
    const onEdgesChange = useCallback(
        (changes: EdgeChange<EdgeType>[]) =>
            setEdges((edgesSnapshot) =>
                applyEdgeChanges(changes, edgesSnapshot),
            ),
        [],
    );
    const onConnect = useCallback(
        (params: Connection) =>
            setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
        [],
    );

    return (
        <div style={{ width: "100vw", height: "100vh" }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                fitView
            />
        </div>
    );
}
