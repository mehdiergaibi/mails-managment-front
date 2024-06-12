import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
export interface PropsType {
  title: string;
  Icon: LucideIcon;
  desc: string;
}

function StatCard({ title, Icon, desc }: PropsType) {
  return (
    <CardContent>
      <section className="flex justify-between gap-2">
        <h1 className="text-sm">{title}</h1>
        <Icon className="h-4 w-4 text-gray-400" />
      </section>
      <section className="flex flex-col gap-1">
        <p className="text-xs text-gray-500">{desc}</p>
      </section>
    </CardContent>
  );
}

export function CardContent(props: React.HtmlHTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex x-full flex-col gap-3 rounded-xl border p-5 shadow",
        props.className
      )}
    >
      {props.children}{" "}
    </div>
  );
}

export default StatCard;
