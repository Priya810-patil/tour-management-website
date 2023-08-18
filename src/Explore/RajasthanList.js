import HolidayPacakageData from "./HolidayPacakageData";
import { HolidayPacakageGallery } from "./HolidayPacakageGallery";
import holidayPackages from "./HolidayPacakage";



export default function RajasthanList() {

  const Jaipur = holidayPackages.filter(E => E.packageName === 'Best-Selling 7 Days Rajasthan Tour Packages For Memorable Vacay')
  const JaipurItems = Jaipur.map((E) =>
    <HolidayPacakageGallery packageName={E.packageName}destinationName={E.destinationName} Duration={E.Duration} Price={E.Price} Hotel={E.Hotel} image={E.image} Cities={E.Cities} />)

  const Jodhpur = holidayPackages.filter(E => E.packageName === 'Discover Our Ravishing 3 Nights 4 Days Rajasthan Vacation')
  const JodhpurItems = Jodhpur.map((E) =>
    <HolidayPacakageGallery packageName={E.packageName} Duration={E.Duration} Price={E.Price} Hotel={E.Hotel} image={E.image} Cities={E.Cities} />)



  return (
    <div>
      <HolidayPacakageData data={JaipurItems} />
      <HolidayPacakageData data={JodhpurItems} />
    </div>

  );






}