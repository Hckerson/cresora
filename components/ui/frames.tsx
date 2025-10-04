import FrameCard from "./frame-card";

export default function Frame() {
    return (
        <div className="flexy flex-col rounded-3xl border border-[#E4E4E4] bg-[#FCFBFC] p-4">
            <FrameCard />
            <div className="h-[2px] bg-[#FAB12C] rotate-90 w-6"></div>
            <FrameCard />
        </div>
    );
}
