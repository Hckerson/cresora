"use client";
import "@xyflow/react/dist/style.css";
import CustomImage from "../custom-image";
import IconNode from "./components/iconNode";
import TextNode from "./components/text-node";
import ImageNode from "./components/imageNode";
import { ReactFlow, Background, Controls } from "@xyflow/react";
import { init } from "next/dist/compiled/webpack/webpack";

interface NodeProps {
    title: string;
    subject: string;
    iconUrl: string;
    alt?: string;
}

const nodeTypes = {
    textDisplay: TextNode,
    iconDisplay: IconNode,
    imageDisplay: ImageNode,
};

export default function MoneyNode({ data }: { data: NodeProps }) {
    const { title, subject, alt = `Picture of ${data.title}`, iconUrl } = data;

    const initialNodes = [
        {
            id: "n1",
            position: { x: 30, y: 20 },
            data: {
                srcFor: "icon",
                src: "/svgs/Graph.svg",
                side: [{ pos: "right", id: "a", type: "source" }],
            },
            type: "iconDisplay",
            draggable: true,
        },
        {
            id: "n2",
            position: { x: 295, y: 20 },
            data: {
                srcFor: "icon",
                src: "/svgs/CalendarBlank.svg",
                side: [{ pos: "bottom", id: "a", type: "target" }],
            },
            type: "iconDisplay",
            draggable: true,
        },
        {
            id: "n3",
            position: { x: 530, y: 20 },
            data: {
                srcFor: "icon",
                src: "/svgs/ListDashes.svg",
                side: [{ pos: "left", id: "a", type: "source" }],
            },
            type: "iconDisplay",
            draggable: true,
        },
        {
            id: "n4",
            position: { x: 180, y: 75 },
            data: {
                srcFor: "icon",
                src: "/svgs/MagicWand.svg",
                side: [
                    { pos: "top", id: "a", type: "target" },
                    { pos: "bottom", id: "b", type: "source" },
                ],
            },
            type: "iconDisplay",
            draggable: true,
        },
        {
            id: "n5",
            position: { x: 410, y: 75 },
            data: {
                srcFor: "icon",
                src: "/svgs/Network.svg",
                side: [
                    { pos: "top", id: "a", type: "target" },
                    { pos: "bottom", id: "b", type: "target" },
                ],
            },
            type: "iconDisplay",
        },
        {
            id: "n6",
            position: { x: 270, y: 120 },
            data: {
                className: "max-w-[90px]",
                src: "/images/logo.png",
                side: [
                    { pos: "left", id: "a", type: "target" },
                    { pos: "right", id: "b", type: "source" },
                    { pos: "top", id: "c", type: "source" },
                    { pos: "bottom", id: "d", type: "target" },
                ],
            },
            type: "imageDisplay",
        },
        {
            id: "n7",
            position: { x: 30, y: 260 },
            data: {
                label: "Management",
                side: [{ pos: "top", id: "a", type: "source" }],
            },
            type: "textDisplay",
            draggable: true,
        },
        {
            id: "n8",
            position: { x: 210, y: 260 },
            data: {
                label: "Finance",
                side: [{ pos: "top", id: "a", type: "source" }],
            },
            type: "textDisplay",
            draggable: true,
        },
        {
            id: "n9",
            position: { x: 350, y: 260 },
            data: {
                label: "Clear",
                side: [{ pos: "top", id: "a", type: "source" }],
            },
            type: "textDisplay",
            draggable: true,
        },
        {
            id: "n10",
            position: { x: 470, y: 260 },
            data: {
                label: "Colaboration",
                side: [{ pos: "top", id: "a", type: "source" }],
            },
            type: "textDisplay",
            draggable: true,
        },
    ];

    const initialEdges = [
        {
            id: "n1-n4",
            source: "n1",
            target: "n4",
            sourceHandle: "a",
            type: "step",
        },
        {
            id: "n4-n6",
            source: "n4",
            target: "n6",
            sourceHandle: "b",
            targetHandle: "a",
            type: "step",
        },
        {
            id: "n2-n6",
            source: "n6",
            target: "n2",
            type: "step",
            sourceHandle: "c",
        },
        {
            id: "n3-n5",
            source: "n3",
            target: "n5",
            type: "step",
        },
        {
            id: "n5-n6",
            source: "n6",
            target: "n5",
            type: "step",
            targetHandle: "b",
        },
        {
            id: "n6-n7",
            source: "n7",
            targetHandle: "d",
            target: "n6",
            type: "step",
        },
        {
            id: "n8-n6",
            source: "n8",
            target: "n6",
            type: "step",
            targetHandle: "d",
        },
        {
            id: "n6-n9",
            source: "n9",
            target: "n6",
            type: "step",
            targetHandle: "d",
        },
        {
            id: "n10-n6",
            source: "n10",
            target: "n6",
            type: "step",
            targetHandle: "d",  
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
