import "./Introduce.css";
import React from "react";

const Introduce = () => {
  return (
    <>
      <section
        className="introduce"
        style={{ height: `calc(100vh - 102.8px)` }}
      >
        <div className="top-section">
          <span className="city">город: Актау</span>
          <a className="phone-number" href="#">
            <i
              class="fa fa-phone phone-icon"
              aria-hidden="true"
              style={{ marginRight: "10px" }}
            ></i>
            +7 701 122 4415
          </a>
        </div>
        <div className="content-area introduce-content">
          Ремонт и Обслуживание <br />
          бытовой техники в Актау
        </div>
      </section>
    </>
  );
};

export default Introduce;
