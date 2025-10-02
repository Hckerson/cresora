import clsx from "clsx";

interface FeatureCardData {
  title: string;
  subject: string;
  idx: number;
}

export default function FeatureCard({ title, subject, idx }: FeatureCardData) {
  const styles = {
    "translate-y-0 mx-0": idx == 2,
    "translate-y-3 mx-3": idx == 1,
    "translate-y-6 mx-6": idx == 0,
  };
  return (
    <div
      className={clsx(
        "bg-background absolute inset-0 h-full rounded-[14px] border border-[#E4E4E4]",
        styles
      )}
    >
      <div className="absolute inset-1 flex flex-col gap-y-1 rounded-[9px] bg-linear-to-r from-[#FAFAFA] to-[#EBEBEB] p-3">
        <p className="text-primary text-xs font-medium">{title}</p>
        <p className="text-primary-foreground text-sm">{subject}</p>
      </div>
    </div>
  );
}
