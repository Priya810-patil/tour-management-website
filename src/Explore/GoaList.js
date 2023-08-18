import HolidayPacakageData from "./HolidayPacakageData";
import { HolidayPacakageGallery } from "./HolidayPacakageGallery";
import holidayPackages from "./HolidayPacakage";



export default function GoaList() {

  const SouthGoa = holidayPackages.filter(E => E.packageName === 'Goa Tour Package For 3 nights and 4 days')
  const SouthGoaItems = SouthGoa.map((E) =>
    <HolidayPacakageGallery packageName={E.packageName}destinationName={E.destinationName} Duration={E.Duration} Price={E.Price} Hotel={E.Hotel} image={E.image} Cities={E.Cities} />)

  const Northgoa = holidayPackages.filter(E => E.packageName === 'Most Reasonable Goa Honeymoon Tour Packages')
  const NorthgoaItems = Northgoa.map((E) =>
    <HolidayPacakageGallery packageName={E.packageName} Duration={E.Duration} Price={E.Price} Hotel={E.Hotel} image={E.image} Cities={E.Cities} />)



  return (
    <div>
      <HolidayPacakageData data={SouthGoaItems} />
      <HolidayPacakageData data={NorthgoaItems} />
    </div>

  );






}