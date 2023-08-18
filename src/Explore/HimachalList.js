import HolidayPacakageData from "./HolidayPacakageData";
import { HolidayPacakageGallery } from "./HolidayPacakageGallery";
import holidayPackages from "./HolidayPacakage";



export default function HimachalList() {

    const manali = holidayPackages.filter(E => E.packageName === 'Manali-Kasol Tour Package For Himachal By Cab')
    const manaliItems = manali.map((E) =>
        <HolidayPacakageGallery packageName={E.packageName} Duration={E.Duration} Price={E.Price} Hotel={E.Hotel} image={E.image} Cities={E.Cities} />)

    const kasol = holidayPackages.filter(E => E.packageName === 'Best Of Himachal Honeymoon Package')
    const kasolItems = kasol.map((E) =>
        <HolidayPacakageGallery packageName={E.packageName} Duration={E.Duration} Price={E.Price} Hotel={E.Hotel} image={E.image} Cities={E.Cities} />)

    return (
        <div>
            <HolidayPacakageData data={manaliItems} />
            <HolidayPacakageData data={kasolItems} />
        </div>

    );






}