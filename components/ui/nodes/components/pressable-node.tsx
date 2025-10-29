"use client";
import clsx from "clsx";
import { NodeProps, Node, Handle, Position } from "@xyflow/react";
import React from "react";
import { leftFrameData } from "@/app/lib/placeholder-data";
import Pressable from "./pressable";

type side = "left" | "right" | "top" | "bottom";

type TextNodeProps = Node<
    {
        className?: string;
        side?: [{ pos: side; id: string; type: "source" | "target" }];
    },
    "pressable"
>;

export default function PressableNode(props: NodeProps<TextNodeProps>) {
    return (
        <div
            className={clsx(
                "rounded-2xl border border-[#E4E4E4] bg-[#FFFFFF]",
                props.data.className,
            )}
        >
            <Pressable data={leftFrameData[0]} showButton />
            {props.data.side?.map((side, idx) => {
                return (
                    <Handle
                        key={idx}
                        type={side.type}
                        position={
                            side.pos == "left"
                                ? Position.Left
                                : side.pos == "bottom"
                                  ? Position.Bottom
                                  : side.pos == "right"
                                    ? Position.Right
                                    : Position.Top
                        }
                        id={side.id}
                    />
                );
            })}
        </div>
    );
}
