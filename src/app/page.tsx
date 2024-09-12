import Image from "next/image";
import EmptyContainer from "@/components/EmptyContainer";
import WidgetContainer from "@/components/WidgetContainer";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] h-full flex justify-center gap-14 flex-wrap pt-24 pl-[29px] pr-[29px] lg:pr-[86px] pb-[110px]">
      <EmptyContainer />
      <WidgetContainer />
    </div>
  );
}
