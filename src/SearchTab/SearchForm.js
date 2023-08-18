import './SearchForm.css';
import Destination from "./DestinationData";
import { FaBackspace, FaLocationArrow } from "react-icons/fa";
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import HolidayPackages from "../Explore/HolidayPacakage";
import SearchCondition from "./SearchCondition";
import { useState } from "react";
import KeralaList from '../Explore/KeralaList';


export default function SearchForm() {

  const navigate = useNavigate();

  ///State variable as an object-inputs for details to search 
  const [inputs, setInputs] = useState({});

  const [destinationInput, setDestinationInput] = useState('');

  const [holidaypacakage, setHolidayPacakage] = useState([]);



  //event handler to handler destination 
  const handleDestinationchange = (event) => {
    setDestinationInput(event.target.value)
  }

  const handleDurationchange = (event) => {
    setInputs({ ...inputs, Duration: event.target.value })
  }

  const handleMonthschange = (event) => {
    setInputs({ ...inputs, Months: event.target.value })
  }


  const handleHolidayPackageChange = () => (
    navigate(`/SearchCondition/${destinationInput}`)

  )


  return (
    <div className='searchformmain1'>
    <nav class=" searchform1 navbar-expand-lg navbar-light bg-Dark" >
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="images/travel.png" alt="" width="30" height="24" />
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                <select id="Destination" type="text" value={destinationInput} onChange={handleDestinationchange}
                  placeholder="Destination:">
                  {Destination.map(des => <option key={des.id} value={des.id}>{des.name}</option>)}
                </select>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><select id="Duration" onChange={handleDurationchange} placeholder="Duration:">
                <option value="">Select Duration</option>
                <option value="1">1 to 3 days</option>
                <option value="2">4 to 6 days</option>
                <option value="3">7 to 9 days</option>
                <option value="3">10 to 12 days</option>
                <option value="3">13 days or more</option>
                <option value="3">Not decided</option>
              </select></a>
            </li>
            <li class="nav-item ">
              <a class="nav-link " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <input id="month" type="month" name="Month" placeholder="Select Month:" onChange={handleMonthschange} />
              </a>
            </li>
          </ul>
          <form class="d-flex" >
            <button className="btn btn-outline-success" onClick={() => handleHolidayPackageChange()} type="button">
              Let's Go!
            </button>
            <Outlet />
          </form>
        </div>
      </div>
    </nav>
    </div>
  )
};

