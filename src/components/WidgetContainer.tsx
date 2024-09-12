import Widget from "./Widget";
import AboutSection from "./AboutSection/AboutSection";
import Gallery from "./Gallery/Gallery";

export default function WidgetContainer() {
  return (
    <div className="h-full max-w-[52.25rem] min-w-[37rem] w-full flex flex-col flex-1 justify-between items-center gap-[41px]">
      <Widget body={<AboutSection />} />
      <Widget body={<Gallery />} />
    </div>
  );
}
