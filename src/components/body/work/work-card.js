import React from "react";
import "./work-card.css";
function WorkCard({ item }) {
  return (
    <div className="work-card">
      <img src={item.companyLogo} className="work-logo bg-white" alt="logo" />
      <div className="work-info ">
        <label className="company-name pb-3 fs-4 ">{item.company}</label>
        <div className="work-designation pb-3">
          <label>{item.designation}</label>
        </div>
        <div className="work-dates text-white pb-3">
          <label>{item.dateJoining}</label>-<label>{item.dateEnd}</label>
        </div>
        <div className="work-desc">
          <p>{item.work}</p>
        </div>
      </div>
    </div>
  );
}

export default WorkCard;
