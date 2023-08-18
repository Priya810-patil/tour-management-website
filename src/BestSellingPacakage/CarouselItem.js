import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function CarouselItems(props) {
  return (
    <>
      <div className="main-card">
        <div class="card" style={{ width:"18rem" }}>
          <img src={props.url} class="main-image" alt="product" />
          <div class="card-body">
            <p class="card-text">
             {props.name} 
              <>
                <h6>244+ packges</h6>
                <h6>Starting From:</h6>
                <h5>Rs:10,000</h5>
              </>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
