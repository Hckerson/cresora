import Description from "@/components/ui/description";
import PrincipleCard from "@/components/ui/principle-card";
import { principleCardData } from "@/app/lib/placeholder-data";

export default function PrincipleSection() {
    return (
        <div className="pady flexy flex-col  px-6 md:px-12">
            <Description
                title="The Principles That Guide Us"
                description="Our commitment to building a better way for businesses to manage their finances"
            />
            <div className="box-border w-full xl:w-[1280px]">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    {principleCardData.map((data, idx) => (
                        <PrincipleCard data={data} key={idx} />
                    ))}
                </div>
            </div>
        </div>
    );
}
