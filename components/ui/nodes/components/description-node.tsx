"use client";
import clsx from "clsx";
import { inter } from "@/public/fonts/fonts";
import { NodeProps, Node, Position, Handle } from "@xyflow/react";

type side = "left" | "right" | "top" | "bottom";

type TextNodeProps = Node<
    {
        side: [{ pos: side; id: string; type: "source" | "target" }];
        theme?: "light" | "dark";
        description: string;
    },
    "text"
>;

export default function DescriptionNode(props: NodeProps<TextNodeProps>) {
    return (
        <div
            className={clsx(
                "max-w-[235px] rounded-[8px] border border-[#E4E4E4] bg-white p-1",
                inter.className,
            )}
        >
            <div
                className={clsx(
                    "flex w-full flex-col gap-y-1 rounded-[6px] border p-3",
                    props.data.theme == "dark"
                        ? "border-[#000000]/8 bg-gradient-to-r from-[#666666] to-[#333333] text-white"
                        : "border-[#000000]/8 bg-gradient-to-r from-[#FAFAFA] to-[#EBEBEB] text-black",
                )}
            >
                <p className="text-[12px] text-[#030E1F]">
                    AI Insight
                </p>
                <p className="text-[10px] text-[#56585a]">
                    {props.data.description}
                </p>
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
