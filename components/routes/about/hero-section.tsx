import Frame from "@/components/ui/frames";
import Points from "@/components/ui/keypoint";
import Button from "@/components/common/button";
import Hightlight from "@/components/ui/highlight";
import Description from "@/components/ui/description";
import CustomImage from "@/components/ui/custom-image";
import { aboutFigures } from "@/app/lib/placeholder-data";
import { leftFrameData, rightFrameData } from "@/app/lib/placeholder-data";

export default function Hero() {
    return (
        <div className="paddy mt-[98px] pt-12">
            <div className="flexy flex-col">
                <Hightlight />
                <Description
                    title="Empowering SMEs Entrepreneurs with Financial Clarity"
                    description="We believe managing your finances shouldn't be a barrier to growth. Cresora was built to give every business owner in Indonesia the tools and confidence they need to build
a stable, thriving company."
                    classT="max-w-[35ch]"
                    classD="max-w-[70ch]"
                />
                <Button size="md" style="hover:bg-blue-600">
                    Contact Us
                </Button>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-[20%_55%_20%] justify-center gap-6 pt-18">
                <Frame data={leftFrameData} />
                <CustomImage
                    height={1300}
                    width={2000}
                    alt="Financial workers collaborating"
                    src="/images/lcd.jpg"
                    classes="rounded-3xl h-full"
                    boxClass="max-h-[422px]"
                />
                <Frame data={rightFrameData} />
            </div>
            <div className="py-12">
                <Points data={aboutFigures} />
            </div>
        </div>
    );
}
