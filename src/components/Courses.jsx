import React from "react";
import "../styles/Courses.css";
import Course1 from "../assests/program-1.png";
import Course2 from "../assests/program-2.png";
import Course3 from "../assests/program-3.png";
import Course1Icon from "../assests/program-icon-1.png";
import Course2Icon from "../assests/program-icon-2.png";
import Course3Icon from "../assests/program-icon-3.png";

function Courses() {
  return (
    <div className="Courses" id="Courses">
      <div className="course">
        <img src={Course1} alt="Course1" />
        <div className="degree">
          <img src={Course1Icon} alt="Icon" />
          <p>Bachelor</p>
        </div>
      </div>
      <div className="course">
        <img src={Course2} alt="Course2" />
        <div className="degree">
          <img src={Course2Icon} alt="Icon" />
          <p>Master</p>
        </div>
      </div>
      <div className="course">
        <img src={Course3} alt="Course3" />
        <div className="degree">
          <img src={Course3Icon} alt="Icon3" />
          <p>PHD</p>
        </div>
      </div>
    </div>
  );
}

export default Courses;
