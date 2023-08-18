import HolidayPacakageData from "./HolidayPacakageData";
import { HolidayPacakageGallery } from "./HolidayPacakageGallery";
import holidayPackages from "./HolidayPacakage";



export default function ShimalaList() {

  const shimala = holidayPackages.filter(E => E.packageName === 'Ecstatic Shimla 4 Night 5 Day Tour Package')
  const shimalaItems = shimala.map((E) =>
    <HolidayPacakageGallery packageName={E.packageName} destinationName={E.destinationName}  Duration={E.Duration} Price={E.Price} Hotel={E.Hotel} image={E.image} Cities={E.Cities} />)

  const dharmashala = holidayPackages.filter(E => E.packageName === 'Best 7 Nights 8 Days Himachal Honeymoon by Cab for an Amazing Experience')
  const dharmashalaItems = dharmashala.map((E) =>
    <HolidayPacakageGallery packageName={E.packageName} Duration={E.Duration} Price={E.Price} Hotel={E.Hotel} image={E.image} Cities={E.Cities} />)



  return (
    <div>
      <HolidayPacakageData data={shimalaItems} />
      <HolidayPacakageData data={dharmashalaItems} />
    </div>

  );






}