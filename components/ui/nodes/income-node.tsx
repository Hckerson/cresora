import "@xyflow/react/dist/style.css";
import CustomImage from "../custom-image";
import TextUpdaterNode from "./components/text-node";
import { ReactFlow, Background, Controls } from "@xyflow/react";

interface NodeProps {
    title: string;
    subject: string;
    iconUrl: string;
    alt?: string;
}

const nodeTypes = {
  textUpdater: TextUpdaterNode,
};


export default function IncomeNode({ data }: { data: NodeProps }) {
    const { title, subject, alt = `Picture of ${data.title}`, iconUrl } = data;

    const initialNodes = [
        {
            id: "n1",
            position: { x: 30, y: 20 },
            width: 100,
            data: { label: "CEO" },
            type: "input",
        },
        {
            id: "n2",
            position: { x: 160, y: 20 },
            width: 100,
            data: { label: "Finance" },
        },
        {
            id: "n3",
            position: { x: 290, y: 20 },
            width: 100,
            data: { label: "Operator" },
            type: "input",
        },
        {
            id: "n4",
            position: { x: 420, y: 20 },
            width: 100,
            data: { label: "HRD" },
        },
        // {
        //     id: "n5",
        //     position: { x: 0, y: 100 },
        //     data: { label: "Node 1" },
        //     type: "input",
        // },
        // {
        //     id: "n7",
        //     position: { x: 100, y: 100 },
        //     data: { label: "Node 2" },
        // },
        // {
        //     id: "n1",
        //     position: { x: 50, y: 100 },
        //     data: { label: "Node 1" },
        //     type: "input",
        // },
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
                    <ReactFlow nodes={initialNodes} nodeTypes={nodeTypes}>
                        <Background />
                        <Controls />
                    </ReactFlow>
                </div>
            </div>
        </div>
    );
}
