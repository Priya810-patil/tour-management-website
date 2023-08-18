import HolidayPacakageData from "./HolidayPacakageData";
import { HolidayPacakageGallery } from "./HolidayPacakageGallery";
import holidayPackages from "./HolidayPacakage";



export default function ThailandList() {

  const Phuket = holidayPackages.filter(E => E.packageName === 'Best Bangkok & Phuket Honeymoon Package For A Pocket Friendly Vacation')
  const PhuketItems = Phuket.map((E) =>
    <HolidayPacakageGallery packageName={E.packageName} destinationName={E.destinationName} Duration={E.Duration} Price={E.Price} Hotel={E.Hotel} image={E.image} Cities={E.Cities} />)

  const Pattaya = holidayPackages.filter(E => E.packageName === 'Top Selling 3 Nights And 4 Days Pattaya Tour Packages')
  const PattayaItems = Pattaya.map((E) =>
    <HolidayPacakageGallery packageName={E.packageName} Duration={E.Duration} Price={E.Price} Hotel={E.Hotel} image={E.image} Cities={E.Cities} />)



  return (
    <div>
      <HolidayPacakageData data={PhuketItems} />
      <HolidayPacakageData data={PattayaItems} />
    </div>

  );






}