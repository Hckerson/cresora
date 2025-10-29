"use client";
import { NodeProps, Node, Position, Handle } from "@xyflow/react";
import clsx from "clsx";

type side = "left" | "right" | "top" | "bottom";

type TextNodeProps = Node<
    {
        label: string;
        style: string;
        side: [{ pos: side; id: string; type: "source" | "target" }];
        theme?: "light" | "dark";
    },
    "text"
>;

export default function TextNode(props: NodeProps<TextNodeProps>) {
    return (
        <div
            className={clsx(
                "rounded-full border border-[#E4E4E4] bg-white p-1",
                props.data.style,
            )}
        >
            <div
                className={clsx(
                    "w-full rounded-full border p-3",
                    props.data.theme == "dark"
                        ? "border-[#000000]/8 bg-gradient-to-r from-[#666666] to-[#333333] text-white"
                        : "border-[#000000]/8 bg-gradient-to-r from-[#FAFAFA] to-[#EBEBEB] text-black",
                )}
            >
                <p className={clsx("text-[12px]  text-center", props.data.theme == "dark" ? "text-white" : "text-[#030E1F]")}>
                    {props.data?.label}
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
