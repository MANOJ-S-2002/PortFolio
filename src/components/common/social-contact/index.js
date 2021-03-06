import React from "react";
import { SocialData } from "../../../data/social";
import "./social-contact.css";
function SocialContact() {
  const data = SocialData;
  return (
    <div className="social-contact p-4">
      {data.map((item) => {
        return (
          <a href={item.link}>
            <div className="social-icon-div bg-white rounded">
              <img src={item.icon} className="social-icon" alt="social" />
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default SocialContact;
