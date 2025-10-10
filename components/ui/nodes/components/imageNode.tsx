"use client";
import clsx from "clsx";
import Image from "next/image";
import { NodeProps, Node, Handle, Position } from "@xyflow/react";

type side = "left" | "right" | "top" | "bottom";

type TextNodeProps = Node<
    {
        src: string;
        side: [{ pos: side; id: string; type: "source" | "target" }];
    },
    "icon"
>;

export default function ImageNode(props: NodeProps<TextNodeProps>) {
    return (
        <div
            className={clsx(
                "h-[105px] w-[156px] rounded-2xl border border-[#E4E4E4] bg-[#FFFFFF]",
            )}
        >
            <Image
                className="h-full bg-cover drop-shadow-2xl rounded-2xl pt-2"
                alt="Node image"
                src={props.data.src}
                width={300}
                height={200}
            ></Image>
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
