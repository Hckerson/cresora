"use client";
import clsx from "clsx";
import Image from "next/image";
import { NodeProps, Node, Handle, Position } from "@xyflow/react";

type side = "left" | "right" | "top" | "bottom";

type TextNodeProps = Node<
    {
        src: string;
        srcFor: "icon" | "image";
        side: [{ pos: side; id: string; type: "source" | "target" }];
    },
    "icon"
>;

export default function IconNode(props: NodeProps<TextNodeProps>) {
    const styles = {
        "h-full w-full rounded-full border border-[#000000]/8":
            props.data.srcFor == "image",
        "h-full w-full rounded-full border border-[#000000]/8 p-1.5 bg-gradient-to-r from-[#666666] to-[#333333]":
            props.data.srcFor == "icon",
    };
    return (
        <div className="size-[40px] rounded-full border border-[#E4E4E4] bg-white p-1">
            <div className={clsx("", styles)}>
                <Image
                    className="h-full"
                    alt="Node image"
                    src={props.data.src}
                    width={100}
                    height={100}
                ></Image>
            </div>
            {props.data.side.map((side, idx) => {
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
