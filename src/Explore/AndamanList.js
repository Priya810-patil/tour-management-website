import HolidayPacakageData from "./HolidayPacakageData";
import { HolidayPacakageGallery } from "./HolidayPacakageGallery";
import holidayPackages from "./HolidayPacakage";


export default function AndamanList() {

  const PortBlair = holidayPackages.filter(E => E.packageName === 'Enjoy An Island Getaway With Our Andaman Honeymoon Package')
  const PortBlairItems = PortBlair.map((E) =>
    <HolidayPacakageGallery packageName={E.packageName} destinationName={E.destinationName} Duration={E.Duration} Price={E.Price} Hotel={E.Hotel} image={E.image} Cities={E.Cities} />)

  const Havelock = holidayPackages.filter(E => E.packageName === 'Discover Our Beautiful 4 Nights 5 Days Andaman Family Tour Packages')
  const HavelockItems = Havelock.map((E) =>
    <HolidayPacakageGallery packageName={E.packageName} Duration={E.Duration} Price={E.Price} Hotel={E.Hotel} image={E.image} Cities={E.Cities} />)


  return (
    <div>
      <HolidayPacakageData data={PortBlairItems} />
      <HolidayPacakageData data={HavelockItems} />
    </div>

  );



}