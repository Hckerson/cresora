import Hightlight from "@/components/ui/highlight";
import Description from "@/components/ui/description";
import ContactForm from "@/components/ui/contact-form";


export default function HeroSection() {
    return (
        <div className="paddy 3xl:w-[1480px] mx-auto mt-[98px] pt-12">
            <div className="flexy flex-col">
                <Hightlight />
                <Description
                    title="Our Team Will Answer All Your Questions"
                    description="Fill out the form below and we'll get back to you as soon as possible."
                    classT="max-w-[25ch]"
                    classD="max-w-[70ch]"
                />
                <ContactForm/>
            </div>

        </div>
    );
}
