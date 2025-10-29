"use client";
import { useRef, useState } from "react";
import Button from "../common/button";

const maxWord = 1000;

export default function ContactForm() {
    const [wordCount, setWordCount] = useState<number>(0);

    const messageRef = useRef<HTMLTextAreaElement | null>(null);
    const onWordChange = () => {
        const word = messageRef.current?.value ?? "";
        console.log(word);
        const wordCount = word.trimStart().length;
        setWordCount(wordCount);
    };

    return (
        <div className="relative box-border">
            <div className="flex w-full p-8 lg:w-[890px]">
                <form action="" className="w-full">
                    <div className="flex flex-col gap-y-8">
                        <div className="flex flex-col gap-y-8">
                            <div className="grid gap-8 lg:grid-cols-2">
                                <div className="box-border flex flex-col gap-y-2">
                                    <label
                                        className="text-xs md:text-sm xl:text-base"
                                        htmlFor="name"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="rounded-[12px] border-1 border-[#E4E4E4] bg-[#FCFBFC] p-4 placeholder:text-xs placeholder:text-[#B6B7B8] placeholder:md:text-sm"
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div className="box-border flex w-full flex-col gap-y-2">
                                    <label
                                        className="text-xs md:text-sm xl:text-base"
                                        htmlFor="email"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="text"
                                        name="email"
                                        id="email"
                                        className="rounded-[12px] border-1 border-[#E4E4E4] bg-[#FCFBFC] p-4 placeholder:text-xs placeholder:text-[#B6B7B8] placeholder:md:text-sm"
                                        placeholder="Enter your email"
                                    />
                                </div>
                                <div className="box-border flex w-full flex-col gap-y-2">
                                    <label
                                        className="text-xs md:text-sm xl:text-base"
                                        htmlFor="number"
                                    >
                                        Phone Number
                                    </label>
                                    <input
                                        type="text"
                                        name="number"
                                        id="number"
                                        className="rounded-[12px] border-1 border-[#E4E4E4] bg-[#FCFBFC] p-4 placeholder:text-xs placeholder:text-[#B6B7B8] placeholder:md:text-sm"
                                        placeholder="Enter your phone number"
                                    />
                                </div>
                                <div className="box-border flex w-full flex-col gap-y-2">
                                    <label
                                        className="text-xs md:text-sm xl:text-base"
                                        htmlFor="subject"
                                    >
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        id="subject"
                                        className="rounded-[12px] border-1 border-[#E4E4E4] bg-[#FCFBFC] p-4 placeholder:text-xs placeholder:text-[#B6B7B8] placeholder:md:text-sm"
                                        placeholder="Enter your subject"
                                    />
                                </div>
                            </div>
                            <div className="relative box-border flex w-full flex-col gap-y-2 py-4 pb-6">
                                <label
                                    className="text-xs md:text-sm xl:text-base"
                                    htmlFor="message"
                                >
                                    Message
                                </label>
                                <textarea
                                    className="rounded-[12px] border-1 border-[#E4E4E4] bg-[#FCFBFC] p-4 placeholder:text-xs placeholder:text-[#B6B7B8] placeholder:md:text-sm"
                                    placeholder="Enter your message"
                                    rows={10}
                                    ref={messageRef}
                                    id="message"
                                    autoComplete="off"
                                    maxLength={1000}
                                    onChange={onWordChange}
                                    name="message"
                                ></textarea>
                                <span className="absolute right-6 bottom-7 flex gap-x-1 text-[11px] text-[#B9BAC3]">
                                    <p>{wordCount}</p>
                                    <span>/</span>
                                    <p>{maxWord}</p>
                                </span>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <Button size="md" style="hover:bg-blue-600">
                                Send message
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
