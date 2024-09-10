import FirstWidget from "./FirstWidget";
import SecondWidget from "./SecondWidget";

export default function WidgetContainer() {
  return (
    <div className="h-full w-full">
      <FirstWidget />
      <div className={`w-[612px] h-1 rounded-[2.46px] hr`}></div>
      <SecondWidget />
    </div>
  );
}
