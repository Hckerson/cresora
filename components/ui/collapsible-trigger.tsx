"use client";
import { Plus, Minus } from "lucide-react";

export default function Trigger({
    isOpen,
    idx,
}: {
    isOpen: number | null;
    idx: number;
}) {
    return (
        <div className="flex-items-center-justify-center box-border rounded-lg p-2 text-blue-400 hover:bg-blue-100">
            {isOpen == idx ? <Minus /> : <Plus />}
        </div>
    );
}
