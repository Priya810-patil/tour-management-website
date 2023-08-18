import React, { useEffect, useState } from "react";
import "./Carouselnew.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { carouseldata, responsive } from "./CarouselData";
import CarouselItem from "./CarouselItem.js";
import { useForceUpdate } from "../commonFunction/Function";



export default function Carouselnew() {
  const forceUpdate = useForceUpdate();

  const [dist, setDist] = useState(carouseldata)

  const handleDestinationChangenew = (destnat) => {
    let product = carouseldata.filter((destnt) => {
      if (destnt.type === destnat) {
        return destnt;
      }
    });
    setDist(product)
    forceUpdate();
  };

  // const cardest = () =>
  // dist.map((item) => (
  //     <Carousel responsive={responsive}>
  //       <CarouselItem name={item.name} url={item.imageurl} />
  //     </Carousel>
  //   ));


  return (
    <div className="container">
      <div className="carousel">
        <h3
          className="headcarousel"
          style={{ textAlign: "center", color: "red" }}
        >
          Explore Best Selling Holiday Pacakage For
        </h3>
        <div style={{ alignItems: "center" }} className="checkformmain">
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="destination"
              onChange={() =>
                handleDestinationChangenew("International")
              }
              id="inlineCheckbox1"
              value="International"
            />
            <label class="form-check-label" for="inlineCheckbox1">
              Internation Destination
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="destination"
              onChange={() =>
                handleDestinationChangenew("India")
              }
              id="inlineCheckbox2"
              value="India"
            />
            <label class="form-check-label" for="inlineCheckbox2">
              Destination within India
            </label>
          </div>
        </div>

        {/* {cardest()} */}
        <Carousel responsive={responsive}>
          {dist.map((item) => (
            <CarouselItem key={item.id} name={item.name} url={item.imageurl} />
          ))}
        </Carousel>

      </div>
    </div>
  );
}