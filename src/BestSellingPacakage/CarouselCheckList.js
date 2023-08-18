import CarouselCheckListData from './CarouselCheckListData'

export default function CarouselCheckList(props) {

    const desListItem = carouseldata.map((E) => {
        return E.isNational ?
            <Carouselnew type={E.type} name={E.name} url={E.imageurl} National='YES' /> :
            <CarItem model={car.model} brand={car.brand} price={car.price} National='NO' />
    }
    )

    const International = carouseldata.filter(E => E.type === "International")
    const InternationalItems = International.map((E) =>
        <Carouselnew type={E.type} name={E.name} url={E.imageurl} />)

    const India = carouseldata.filter(E => E.type === "India")
    const IndiaItems = India.map((E) =>
        <Carouselnew type={E.type} name={E.name} url={E.imageurl} />)


    return (
        <div>
            <CarouselCheckListData data={desListItem} />
            <CarouselCheckListData data={InternationalItems} />
            <CarouselCheckListData data={IndiaItems} />
        </div>
    )
}
