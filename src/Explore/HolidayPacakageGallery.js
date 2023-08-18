
import './HolidayPacakageGallery.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';

export function HolidayPacakageGallery(props) {

    const [hotelbutton, setHotelbutton] = useState('');

    const [selectedStar, setSelectedStar] = useState('');
    const [price, setPrice] = useState(0);

    const handleradioHotelButton = (e) => {
        setHotelbutton(e.target.value)
    }
    const handlepriceset = () => {
        setPrice(!setPrice)
    }


    return (
        <>
            <h1 className='namedest' style={{color:"red" }}>
                {props.destinationName}</h1>
            <div className='MainCard'>
                < div className=" mb-3  cardholiday" style={{ maxwidth: "700px" }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={props.image} class="img-fluid rounded-start" alt={props.packageName} />
                        </div>
                        <div className="col-md-8 colmd">
                            <div className="card-body">
                                <h4 className="card-title">{props.packageName}</h4>
                                <p className="card-text">
                                    <h5>{props.Duration}</h5>
                                    <div>
                                        <h4>Starting From:</h4>
                                        <h5>{props.Price.rates}</h5>
                                    </div>
                                    <div>
                                        <lable><h5>Hotel include in Package:</h5></lable>
                                        <input type='radio' name="fav_hotel" onChange={handleradioHotelButton} />
                                        <label for="3star">{props.Hotel.rating[0]}</label>
                                        <input type='radio' name="fav_hotel" onChange={handleradioHotelButton} />
                                        <label for="4star">{props.Hotel.rating[1]}</label>
                                        <input type='radio' name="fav_hotel" onChange={handleradioHotelButton} />
                                        <label for="5star">{props.Hotel.rating[2]}</label>
                                    </div>
                                    <h4>Cities:{props.Cities}</h4>
                                    
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}