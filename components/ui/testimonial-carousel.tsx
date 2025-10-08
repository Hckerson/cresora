"use client";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialCard from "./testimonialCard";
import { testimonialCardData } from "@/app/lib/placeholder-data";

export default function Carousel() {
    return (
        <Swiper
            className="w-[calc(100%-50px)]"
            spaceBetween={25}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
                320: { slidesPerView: 1.5 },
                768: { slidesPerView: 2.5 },
                1280: { slidesPerView: 3.5 },
            }}
        >
            {testimonialCardData.map((cardData, index) => (
                <SwiperSlide className="">
                    <TestimonialCard
                        key={index}
                        title={cardData.title}
                        subject={cardData.subject}
                        avatarSrc={cardData.avatarUrl}
                        name={cardData.name}
                        role={cardData.role}
                        iconSrc={cardData.iconUrl}
                        alt={cardData.name}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
