import CustomImage from "../ui/custom-image";

export default function Blank() {
    return (
        <div className="box-border w-full md:h-[414px] xl:h-[768px]">
            <div className="h-full rounded-2xl bg-linear-to-b from-[#1763CC]/4 to-[#1763CC]/32 p-3 pb-0 md:p-6 md:pb-0">
                <CustomImage
                    width={2000}
                    height={1333}
                    alt="Financial institution workers working"
                    src="/images/lcd.jpg"
                    classes="h-full rounded-t-2xl"
                    boxClass="h-full "
                />
            </div>
        </div>
    );
}
