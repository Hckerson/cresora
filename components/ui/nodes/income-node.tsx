"use client";
import "@xyflow/react/dist/style.css";
import CustomImage from "../custom-image";
import IconNode from "./components/iconNode";
import TextNode from "./components/text-node";
import { ReactFlow, Background, Controls } from "@xyflow/react";

interface NodeProps {
    title: string;
    subject: string;
    iconUrl: string;
    alt?: string;
}

const nodeTypes = {
    textDisplay: TextNode,
    iconDisplay: IconNode,
};

export default function IncomeNode({ data }: { data: NodeProps }) {
    const { title, subject, alt = `Picture of ${data.title}`, iconUrl } = data;

    const initialNodes = [
        {
            id: "n1",
            position: { x: 30, y: 20 },
            data: { label: "CEO", side: ["bottom"] },
            type: "textDisplay",
            draggable: true,
        },
        {
            id: "n2",
            position: { x: 160, y: 20 },
            data: { label: "Finance", side: ["left"] },
            type: "textDisplay",
            draggable: true,
        },
        {
            id: "n3",
            position: { x: 290, y: 20 },
            data: { label: "Operator", side: ["left"] },
            type: "textDisplay",
            draggable: true,
        },
        {
            id: "n4",
            position: { x: 430, y: 20 },
            data: { label: "HRD", side: ["bottom"] },
            type: "textDisplay",
            draggable: true,
        },
        {
            id: "n5",
            position: { x: 95, y: 135 },
            data: {
                srcFor: "icon",
                src: "/svgs/userCircle.svg",
                side: ["left"],
            },
            type: "iconDisplay",
        },
        {
            id: "n6",
            position: { x: 395, y: 135 },
            data: { srcFor: "icon", src: "/svgs/plusCircle.svg", side: ["left"] },
            type: "iconDisplay",
        },
        {
            id: "n7",
            position: { x: 30, y: 260 },
            data: { srcFor: "image", src: "/images/man-one.png", side: ["right"] },
            type: "iconDisplay",
        },
        {
            id: "n8",
            position: { x: 160, y: 260 },
            data: { srcFor: "image", src: "/images/woman-one.png", side: ["left"] },
            type: "iconDisplay",
        },

        {
            id: "n9",
            position: { x: 290, y: 260 },
            data: { srcFor: "image", src: "/images/woman-one.png", side: ["left"] },
            type: "iconDisplay",
        },
        {
            id: "n10",
            position: { x: 430, y: 260 },
            data: { srcFor: "image", src: "/images/man-two.png", side: ["left"] },
            type: "iconDisplay",
        },
    ];

    const initialEdges = [
        {
            id: "n1-n5",
            source: "n1",
            target: "n5",
            type: "step",
        },
    ];
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
                        nodes={initialNodes}
                        nodeTypes={nodeTypes}
                        edges={initialEdges}
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
