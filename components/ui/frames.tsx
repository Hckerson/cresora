import FrameCard, { FrameProps } from "./frame-card";

export default function Frame({ data }: { data: FrameProps[] }) {
    return (
        <div className="flexy flex-col rounded-3xl h-fit  border border-[#E4E4E4] bg-[#FCFBFC] p-4">
            <FrameCard data={data[0]}/>
            <div className="h-[2px] w-6 rotate-90 bg-[#FAB12C]"></div>
            <FrameCard data={data[1]} />
        </div>
    );
}
