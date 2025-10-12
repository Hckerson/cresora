"use client";
import "@xyflow/react/dist/style.css";
import CustomImage from "../custom-image";
import IconNode from "./components/iconNode";
import TextNode from "./components/text-node";
import { useState, useCallback } from "react";
import ImageNode from "./components/imageNode";
import {
    ReactFlow,
    Background,
    Controls,
    applyEdgeChanges,
    applyNodeChanges,
    NodeChange,
    EdgeChange,
} from "@xyflow/react";

interface NodeProps {
    title: string;
    subject: string;
    iconUrl: string;
    alt?: string;
}

interface NodeType {
    id: string;
    position: { x: number; y: number };
    data: {
        label?: string;
        className?: string;
        src?: string;
        srcFor?: string;
        side: { pos: string; id: string; type: string }[];
    };
    type: string;
    draggable: boolean;
}

interface EdgeType {
    id: string;
    source: string;
    target: string;
    type: string;
    sourceHandle?: string;
    targetHandle?: string;
}

const nodeTypes = {
    textDisplay: TextNode,
    iconDisplay: IconNode,
    imageDisplay: ImageNode,
};

const initialNodes: NodeType[] = [
    {
        id: "n1",
        position: { x: 30, y: 20 },
        data: {
            label: "CEO",
            side: [{ pos: "bottom", id: "a", type: "source" }],
        },
        type: "textDisplay",
        draggable: true,
    },
    {
        id: "n2",
        position: { x: 160, y: 20 },
        data: {
            label: "Finance",
            side: [
                { pos: "left", id: "a", type: "source" },
                { pos: "right", id: "b", type: "source" },
            ],
        },
        type: "textDisplay",
        draggable: true,
    },
    {
        id: "n3",
        position: { x: 290, y: 20 },
        data: {
            label: "Operator",
            side: [
                { pos: "left", id: "a", type: "target" },
                { pos: "right", id: "b", type: "source" },
            ],
        },
        type: "textDisplay",
        draggable: true,
    },
    {
        id: "n4",
        position: { x: 430, y: 20 },
        data: {
            label: "HRD",
            side: [{ pos: "bottom", id: "a", type: "source" }],
        },
        type: "textDisplay",
        draggable: true,
    },
    {
        id: "n5",
        position: { x: 95, y: 135 },
        data: {
            srcFor: "icon",
            src: "/svgs/userCircle.svg",
            side: [
                { pos: "left", id: "a", type: "target" },
                { pos: "right", id: "b", type: "target" },
                { pos: "top", id: "c", type: "target" },
            ],
        },
        type: "iconDisplay",
        draggable: true,
    },
    {
        id: "n6",
        position: { x: 400, y: 135 },
        data: {
            srcFor: "icon",
            src: "/svgs/plusCircle.svg",
            side: [
                { pos: "left", id: "a", type: "target" },
                { pos: "right", id: "b", type: "target" },
                { pos: "top", id: "c", type: "target" },
            ],
        },
        type: "iconDisplay",
        draggable: true,
    },
    {
        id: "n7",
        position: { x: 30, y: 250 },
        data: {
            srcFor: "image",
            src: "/images/man-one.png",
            side: [],
        },
        type: "iconDisplay",
        draggable: true,
    },
    {
        id: "n8",
        position: { x: 160, y: 250 },
        data: {
            srcFor: "image",
            src: "/images/woman-one.png",
            side: [],
        },
        type: "iconDisplay",
        draggable: true,
    },

    {
        id: "n9",
        position: { x: 330, y: 250 },
        data: {
            srcFor: "image",
            src: "/images/woman-one.png",
            side: [],
        },
        type: "iconDisplay",
        draggable: true,
    },
    {
        id: "n10",
        position: { x: 450, y: 250 },
        data: {
            srcFor: "image",
            src: "/images/man-two.png",
            side: [],
        },
        type: "iconDisplay",
        draggable: true,
    },
    {
        id: "n11",
        position: { x: 186, y: 135 },
        data: {
            className: "max-w-[165px] max-h-[105px]",
            src: "/images/income.png",
            side: [
                { pos: "left", id: "a", type: "source" },
                { pos: "right", id: "b", type: "source" },
            ],
        },
        type: "imageDisplay",
        draggable: true,
    },
];

const initialEdges: EdgeType[] = [
    {
        id: "n1-n5",
        source: "n1",
        target: "n5",
        sourceHandle: "a",
        type: "step",
    },
    {
        id: "n2-n5",
        source: "n2",
        target: "n5",
        targetHandle: "c",
        type: "step",
    },
    {
        id: "n2-n3",
        source: "n2",
        target: "n3",
        type: "step",
    },
    {
        id: "n4-n6",
        source: "n4",
        target: "n6",
        type: "step",
        targetHandle: "b",
    },
    {
        id: "n3-n6",
        source: "n3",
        target: "n6",
        targetHandle: "c",
        type: "step",
    },
    {
        id: "n5-n11",
        source: "n11",
        sourceHandle: "a",
        targetHandle: "b",
        target: "n5",
        type: "step",
    },
    {
        id: "n6-n11",
        source: "n11",
        target: "n6",
        sourceHandle: "b",
        type: "step",
    },
];

export default function IncomeNode({ data }: { data: NodeProps }) {
    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);

    const onNodesChange = useCallback(
        (changes: NodeChange<NodeType>[]) =>
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

    const { title, subject, alt = `Picture of ${data.title}`, iconUrl } = data;

    return (
        <div className="box-border rounded-3xl border border-[#E4E4E4] lg:col-span-2">
            <div className="bg-background box-border flex h-full flex-col justify-between gap-y-8 overflow-hidden rounded-3xl p-4 md:p-6 xl:p-8">
                <div className="relative">
                    <CustomImage
                        height={100}
                        width={100}
                        boxClass="size-[56px] xs:absolute mb-4 top-0 right-0 rounded-full bg-linear-to-r from-[#FEEAC1] to-[#FEC247] p-3"
                        alt={alt}
                        src={iconUrl}
                    />
                    <div className="flex flex-col gap-y-4 xl:pr-12">
                        <p className="text-foreground text-[20px] leading-[1.24] md:text-2xl">
                            {title}
                        </p>
                        <p className="text-primary-foreground text-xs md:text-sm">
                            {subject}
                        </p>
                    </div>
                </div>
                <div className="bg-background box-border h-full w-full rounded-3xl border border-[#E4E4E4]">
                    <ReactFlow
                        nodes={nodes}
                        nodeTypes={nodeTypes}
                        edges={edges}
                        onNodesChange={onNodesChange}
                        onEdgesChange={onEdgesChange}
                        fitView
                    >
                        <Background />
                        <Controls />
                    </ReactFlow>
                </div>
            </div>
        </div>
    );
}
