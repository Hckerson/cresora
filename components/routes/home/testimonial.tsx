import Description from "@/components/ui/description";
import Carousel from "@/components/ui/testimonial-carousel";

export default function Testimonial() {
    return (
        <div className="flexy grid gap-y-12 py-12 md:py-24">
            <Description
                title="Trusted by Professionals"
                description="Across industries and team sizes, Cresora gives growing companies a simpler, smarter way to manage finances."
                classD="max-w-[60ch]"
            />
            <Carousel/>
        </div>
    );
}
