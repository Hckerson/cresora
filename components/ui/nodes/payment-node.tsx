"use client";
import "@xyflow/react/dist/style.css";
import CustomImage from "../custom-image";
import IconNode from "./components/icon-node";
import TextNode from "./components/text-node";
import { useState, useCallback } from "react";
import ImageNode from "./components/image-node";
import PressableNode from "./components/pressable-node";
import {
    ReactFlow,
    Background,
    NodeChange,
    applyEdgeChanges,
    applyNodeChanges,
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
        theme?: string;
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
    animated: boolean;
    type: string;
    sourceHandle?: string;
    targetHandle?: string;
}

const nodeTypes = {
    textDisplay: TextNode,
    iconDisplay: IconNode,
    imageDisplay: ImageNode,
    pressableDisplay: PressableNode,
};

const initialNodes: NodeType[] = [
    {
        id: "n1",
        position: { x: -80, y: 27 },
        data: {
            srcFor: "icon",
            src: "/svgs/UserCircle.svg",
            side: [{ pos: "right", id: "a", type: "source" }],
        },
        type: "iconDisplay",
        draggable: true,
    },
    {
        id: "n2",
        position: { x: 815, y: 27 },
        data: {
            srcFor: "icon",
            src: "/svgs/GoogleDriveLogo.svg",
            side: [{ pos: "left", id: "a", type: "target" }],
        },
        type: "iconDisplay",
        draggable: true,
    },
    {
        id: "n3",
        position: { x: -80, y: 287 },
        data: {
            srcFor: "icon",
            src: "/svgs/FramerLogo.svg",
            side: [{ pos: "right", id: "a", type: "source" }],
        },
        type: "iconDisplay",
        draggable: true,
    },
    {
        id: "n4",
        position: { x: 815, y: 287 },
        data: {
            srcFor: "icon",
            src: "/svgs/Building.svg",
            side: [{ pos: "left", id: "a", type: "target" }],
        },
        type: "iconDisplay",
        draggable: true,
    },
    {
        id: "n5",
        position: { x: 90, y: 20 },
        data: {
            label: "Client Payment",
            side: [
                { pos: "left", id: "a", type: "target" },
                { pos: "right", id: "b", type: "target" },
            ],
        },
        type: "textDisplay",
        draggable: true,
    },
    {
        id: "n6",
        position: { x: 530, y: 20 },
        data: {
            label: "Subscription Fee",
            side: [
                { pos: "left", id: "a", type: "target" },
                { pos: "right", id: "b", type: "source" },
            ],
        },
        type: "textDisplay",
        draggable: true,
    },
    {
        id: "n7",
        position: { x: 92, y: 280 },
        data: {
            label: "Digital Product",
            side: [
                { pos: "left", id: "a", type: "target" },
                { pos: "right", id: "b", type: "target" },
            ],
        },
        type: "textDisplay",
        draggable: true,
    },
    {
        id: "n8",
        position: { x: 530, y: 280 },
        data: {
            label: "Operating Cost",
            side: [
                { pos: "left", id: "a", type: "target" },
                { pos: "right", id: "b", type: "source" },
            ],
        },
        type: "textDisplay",
        draggable: true,
    },
    {
        id: "n9",
        position: { x: 10, y: 104 },
        data: {
            className: "max-w-[265px] max-h-[195px]",
            src: "/images/income.png",
            side: [{ pos: "right", id: "a", type: "target" }],
        },
        type: "pressableDisplay",
        draggable: true,
    },
    {
        id: "n10",
        position: { x: 510, y: 104 },
        data: {
            className: "max-w-[265px] max-h-[195px]",
            src: "/images/income.png",
            side: [{ pos: "left", id: "a", type: "target" }],
        },
        type: "pressableDisplay",
        draggable: true,
    },
    {
        id: "n11",
        position: { x: 350, y: 153 },
        data: {
            label: "Profit",
            theme: "dark",
            side: [
                { pos: "left", id: "a", type: "source" },
                { pos: "right", id: "b", type: "source" },
            ],
        },
        type: "textDisplay",
        draggable: true,
    },
];

const initialEdges: EdgeType[] = [
    {
        id: "n1-n5",
        source: "n1",
        target: "n5",
        sourceHandle: "a",
        type: "smoothstep",
        animated: true,
    },
    {
        id: "n3-n7",
        source: "n3",
        target: "n7",
        sourceHandle: "a",
        targetHandle: "a",
        type: "smoothstep",
        animated: true,
    },
    {
        id: "n2-n6",
        source: "n6",
        target: "n2",
        type: "smoothstep",
        animated: true,
        sourceHandle: "b",
    },
    {
        id: "n4-n8",
        source: "n8",
        target: "n4",
        type: "smoothstep",
        animated: true,
    },
    {
        id: "n5-n11",
        source: "n11",
        target: "n5",
        type: "smoothstep",
        animated: true,
        targetHandle: "b",
    },
    {
        id: "n7-n11",
        source: "n11",
        targetHandle: "b",
        target: "n7",
        type: "smoothstep",
        animated: true,
    },
    {
        id: "n9-n11",
        source: "n11",
        target: "n9",
        type: "smoothstep",
        animated: true,
        targetHandle: "a",
    },
    {
        id: "n6-n11",
        source: "n11",
        target: "n6",
        type: "smoothstep",
        animated: true,
        targetHandle: "a",
        sourceHandle: "b",
    },
    {
        id: "n8-n11",
        source: "n11",
        target: "n8",
        type: "smoothstep",
        animated: true,
        targetHandle: "a",
        sourceHandle: "b",
    },
    {
        id: "n10-n11",
        source: "n11",
        target: "n10",
        type: "smoothstep",
        animated: true,
        targetHandle: "a",
        sourceHandle: "b",
    },
];

export default function PaymentNode({ data }: { data: NodeProps }) {
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
        <div className="box-border h-[400px] rounded-3xl border border-[#E4E4E4] md:h-[350px] lg:col-span-3 lg:h-[488px]">
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
                    </ReactFlow>
                </div>
            </div>
        </div>
    );
}
