"use client";
import { NodeProps, Node, Position, Handle } from "@xyflow/react";

type side = "left" | "right" | "top" | "bottom";

type TextNodeProps = Node<
    {
        label: string;
        side: [{ pos: side; id: string; type: "source" | "target" }];
    },
    "text"
>;

export default function TextNode(props: NodeProps<TextNodeProps>) {
    return (
        <div className="rounded-full border border-[#E4E4E4] bg-white p-1">
            <div className="rounded-full border border-[#000000]/8 bg-gradient-to-r from-[#FAFAFA] to-[#EBEBEB] p-3">
                <p>{props.data?.label}</p>
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
