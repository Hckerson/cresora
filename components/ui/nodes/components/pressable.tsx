import PressableNode from "./pressable-node";
import FrameCard from "../../frame-card";
import { leftFrameData } from "@/app/lib/placeholder-data";
import { XYPosition } from "@xyflow/react";

type side = "left" | "right" | "top" | "bottom";

interface Pressable {
    id: string
    position: XYPosition
    data: {
        label?: string;
        className?: string;
        src?: string;
        theme?: string;
        srcFor?: string;
        side: [{ pos: side; id: string; type: "source" | "target"}];
    };
    type: "icon"
}

export default function Pressable({id, position, data, type}: Pressable) {
    return(
        <PressableNode id={id} position={position} type={type} data={data}>
            <FrameCard data={leftFrameData[0]}/>
        </PressableNode>
    )
}