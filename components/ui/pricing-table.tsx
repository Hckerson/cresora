import Description from "./description";
import { Check } from "lucide-react";
import { pricingFeaturesData } from "@/app/lib/placeholder-data";

export default function PricingTable() {
    return (
        <div className="paddy flexy 3xl:max-w-[1480px] mx-auto flex-col gap-y-12">
            <Description
                title="Compare Plans"
                description="Choose the right plan for your business, whatever your stage of growth."
            />
            <table
                style={{ borderRadius: 30 }}
                className="box-border hidden xl:w-[1280px] border-collapse border border-gray-300 md:table"
            >
                <thead className="">
                    <tr className="h-[54px] md:h-[75px] xl:h-[96px]">
                        <th className="w-[40%] border-gray-300 text-start">
                            <p className="pl-8">Core Features</p>
                        </th>
                        <th className="w-[20%] border-x border-gray-300">
                            Starter
                        </th>
                        <th className="w-[20%] border-r border-gray-300">
                            Growth
                        </th>
                        <th className="w-[20%] border-gray-300">Scale</th>
                    </tr>
                </thead>
                <tbody>
                    {pricingFeaturesData.map((data, idx) => {
                        const { starter, growth, scale } = data.data;
                        return (
                            <tr
                                className="h-[54px] md:h-[75px] xl:h-[96px]"
                                key={idx}
                            >
                                <td className="border-t border-gray-300">
                                    <div className="pl-8">{data.name}</div>
                                </td>
                                <td className="border-x border-t border-gray-300">
                                    <div className="xs:text-xs text-center text-[8px] md:text-[14px]">
                                        {typeof starter == "string" ? (
                                            starter
                                        ) : typeof starter == "boolean" &&
                                          starter == true ? (
                                            <CheckMark />
                                        ) : (
                                            ""
                                        )}
                                    </div>
                                </td>
                                <td className="border-t border-r border-gray-300">
                                    <div className="xs:text-xs text-center text-[8px] md:text-[14px]">
                                        {typeof growth == "string" ? (
                                            growth
                                        ) : typeof growth == "boolean" &&
                                          growth == true ? (
                                            <CheckMark />
                                        ) : (
                                            ""
                                        )}
                                    </div>
                                </td>
                                <td className="border-t border-gray-300">
                                    <div className="xs:text-xs text-center text-[8px] md:text-[14px]">
                                        {typeof scale == "string" ? (
                                            scale
                                        ) : typeof scale == "boolean" &&
                                          scale == true ? (
                                            <CheckMark />
                                        ) : (
                                            ""
                                        )}
                                    </div>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export function CheckMark() {
    return (
        <div className="flexy mx-auto size-[18px] gap-y-0 rounded-full border border-gray-300 p-[5px] md:size-[23px] xl:size-[28px]">
            <Check className="text-black xl:stroke-3 xs:stroke-2 stroke-1" />
        </div>
    );
}
