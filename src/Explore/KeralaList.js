import HolidayPacakageData  from "./HolidayPacakageData";
import { HolidayPacakageGallery } from "./HolidayPacakageGallery";
import holidayPackages from "./HolidayPacakage";



export default function KeralaList(props) {

   const Munnar = holidayPackages.filter(E => E.packageName === 'Best Selling Alleppey-Munnar Kerala Weekend Tour')
  const MunnarItems = Munnar.map((E) =>
    <HolidayPacakageGallery packageName={E.packageName} destinationName={E.destinationName} Duration={E.Duration} Price={E.Price} Hotel={E.Hotel} image={E.image} Cities={E.Cities} />)

  const Kochi = holidayPackages.filter(E => E.packageName === 'Charismatic Kochi Tour Package')
  const KochiItems = Kochi.map((E) =>
    <HolidayPacakageGallery packageName={E.packageName} Duration={E.Duration} Price={E.Price} Hotel={E.Hotel} image={E.image} Cities={E.Cities} />)

  const Cochin = holidayPackages.filter(E => E.packageName === 'Vibrant Kochi Munnar Honeymoon Tour Package')
  const CochinItems = Cochin.map((E) =>
    <HolidayPacakageGallery packageName={E.packageName} Duration={E.Duration} Price={E.Price} Hotel={E.Hotel} image={E.image} Cities={E.Cities} />)

  return (
    <div>
     
      <HolidayPacakageData data={MunnarItems} />
      <HolidayPacakageData data={KochiItems} />
      <HolidayPacakageData data={CochinItems} />
    </div>

  );






}