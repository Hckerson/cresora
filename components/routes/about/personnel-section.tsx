import Link from "next/link";
import Button from "@/components/common/button";
import Description from "@/components/ui/description";
import PersonnelCard from "@/components/ui/personnelCard";
import { personnelData } from "@/app/lib/placeholder-data";

export default function Personnel() {
    return (
        <div className="pady flexy box-border flex-col gap-y-12 py-0 md:py-0 lg:py-0">
            <Description
                title="The People Behind the Platform"
                description="Meet the experienced professionals committed to your financial success"
            />
            <div className="flexy flex-col gap-y-8">
                <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 xl:w-[1280px] xl:grid-cols-3">
                    {personnelData.map((personnel, idx) => (
                        <PersonnelCard key={idx} data={personnel} />
                    ))}
                </div>
                <Button size="lg" style="hover:bg-blue-600">
                    <Link href={"/"}>See more</Link>
                </Button>
            </div>
        </div>
    );
}
