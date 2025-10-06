import Button from "@/components/common/button";
import Hightlight from "@/components/ui/highlight";
import Description from "@/components/ui/description";
import CustomImage from "@/components/ui/custom-image";

export default function CTA() {
    return (
        <div className="3xl:w-[1480px] paddy mx-auto">
            <div className="flexy flex-col rounded-3xl border border-[#E4E4E4] py-18 pb-0">
                <div className="flexy box-border flex-col">
                    <Hightlight />
                    <Description
                        title="Take Control of Company Finances"
                        description="Bring your entire team into financial clarity, with one shared view of your company’s money"
                    />
                    <Button size="sm">Contact Us</Button>
                </div>
                <div className="bg-gradient-to-b from-[#1763CC]/4 rounded-b-3xl to-[#1763CC]/32 p-12 pb-0">
                    <div className="rounded-t-2xl overflow-hidden">
                        <CustomImage
                            boxClass="h-[500px]"
                            classes="h-full bg-cover"
                            alt="Coins"
                            height={1596}
                            width={2400}
                            src="/images/dollars.jpg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
