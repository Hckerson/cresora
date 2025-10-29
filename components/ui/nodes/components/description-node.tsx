"use client";
import { NodeProps, Node, Position, Handle } from "@xyflow/react";
import clsx from "clsx";

type side = "left" | "right" | "top" | "bottom";

type TextNodeProps = Node<
    {
        label: string;
        side: [{ pos: side; id: string; type: "source" | "target" }];
        theme?: "light" | "dark";
    },
    "text"
>;

export default function TextNode(props: NodeProps<TextNodeProps>) {
    return (
        <div className="rounded-[8px] border border-[#E4E4E4] bg-white p-1">
            <div className={clsx("rounded-[8px] border flex flex-col gap-y-1  p-3", props.data.theme == 'dark'?"text-white border-[#000000]/8 bg-gradient-to-r from-[#666666] to-[#333333]":"border-[#000000]/8 bg-gradient-to-r from-[#FAFAFA] to-[#EBEBEB] text-black")}>
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
