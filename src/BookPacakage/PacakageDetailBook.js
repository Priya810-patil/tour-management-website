import PacakageDetailBookData from './PacakageDetailBookData'
import PacakageDetailBookGallery from './PacakageDetailBookGallery';



export default function PacakageDetailBook() {


    const PacakageBookGalleryList = PacakageDetailBookData.map((PacakageDetailBookGalleryList) =>
        <PacakageDetailBookGallery pckgname={PacakageDetailBookGalleryList} />)

    return (
        <ol>
            <h2>Course List:</h2>
            {PacakageBookGalleryList}
        </ol>
    );
}


