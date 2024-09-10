import Image from "next/image";
import EmptyContainer from "@/components/EmptyContainer";
import WidgetContainer from "@/components/WidgetContainer";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] h-screen flex justify-between gap-14 pt-24 pl-[29px] pr-[86px] pb-[110px]">
      <EmptyContainer />
      <WidgetContainer />
    </div>
  );
}
