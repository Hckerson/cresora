'use server'
import { NodeProps, Node } from "@xyflow/react";

type TextNodeProps = Node<
    {
        id: string;
        text: string,
        position: {
            x: number;
            y: number;
        };
        width: number;
        data: {
            label: string;
        };
        type: string;
    },
    "text"
>;

export default async function TextUpdaterNode(props:NodeProps<TextNodeProps>) {
    console.log(props.data)
    return (
        <div className="text-updater-node">
            <div>
                <p >
                    {props.data?.text}
                </p>
            </div>
        </div>
    );
}
