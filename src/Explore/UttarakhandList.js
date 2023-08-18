import HolidayPacakageData from "./HolidayPacakageData";
import { HolidayPacakageGallery } from "./HolidayPacakageGallery";
import holidayPackages from "./HolidayPacakage";



export default function UttarakhandList() {

  const Mussoorie = holidayPackages.filter(E => E.packageName === 'Heaven on earth: Uttarakhand')
  const MussoorieItems = Mussoorie.map((E) =>
    <HolidayPacakageGallery packageName={E.packageName} destinationName={E.destinationName} Duration={E.Duration} Price={E.Price} Hotel={E.Hotel} image={E.image} Cities={E.Cities} />)

  const Dhanaulti = holidayPackages.filter(E => E.packageName === 'Delightful Uttarakhand Family Tour Package')
  const DhanaultiItems = Dhanaulti.map((E) =>
    <HolidayPacakageGallery packageName={E.packageName} Duration={E.Duration} Price={E.Price} Hotel={E.Hotel} image={E.image} Cities={E.Cities} />)



  return (
    <div>
      <HolidayPacakageData data={MussoorieItems} />
      <HolidayPacakageData data={DhanaultiItems} />
    </div>

  );






}