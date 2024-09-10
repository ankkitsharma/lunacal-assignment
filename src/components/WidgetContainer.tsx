import Widget from "./Widget";
import AboutSection from "./AboutSection/AboutSection";

export default function WidgetContainer() {
  return (
    <div className="h-full w-full flex flex-col justify-between items-center gap-[41px]">
      <Widget body={<AboutSection />} />
      <Widget />
    </div>
  );
}
