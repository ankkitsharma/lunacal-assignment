import Widget from "./Widget";
import AboutSection from "./AboutSection/AboutSection";
import Gallery from "./Gallery/Gallery";

export default function WidgetContainer() {
  return (
    <div className="h-full w-full flex flex-col justify-between items-center gap-[41px]">
      <Widget body={<AboutSection />} />
      <Widget body={<Gallery />} />
    </div>
  );
}
