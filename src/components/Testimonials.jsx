import React from "react";
import "../styles/Testimonials.css";
import NextIcon from "../assests/next-icon.png";
import BackIcon from "../assests/back-icon.png";
import User1 from "../assests/user-1.png";
import User2 from "../assests/user-2.png";
import User3 from "../assests/user-3.png";
import User4 from "../assests/user-4.png";
import { useRef } from "react";

function Testimonials() {
  const slider = useRef();
  let transX = 0;

  const slideForward = () => {
    if (transX > -50) {
      transX -= 25;
    }
    slider.current.style.transform = `translateX(${transX}%)`;
  };
  const slideBackward = () => {
    if (transX < 0) {
      transX += 25;
    }
    slider.current.style.transform = `translateX(${transX}%)`;
  };
  return (
    <div className="Testimonials" id="Testimonials">
      <img
        src={NextIcon}
        alt="NextIcon"
        className="next"
        onClick={slideForward}
      />
      <img
        src={BackIcon}
        alt="BackIcon"
        className="back"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={User1} alt="User 1" />
                <div>
                  <h3>James Parker</h3>
                  <span>University of California</span>
                </div>
              </div>
              <p>
                "My experience with this program was truly life-changing. The
                instructors were knowledgeable and always available to help, and
                the curriculum was structured in a way that made complex
                concepts easy to understand. The hands-on projects helped me
                build real-world skills, and I felt supported every step of the
                way. I highly recommend this course to anyone looking to advance
                their career!"
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={User2} alt="User 1" />
                <div>
                  <h3>Jane Doe</h3>
                  <span>University of California</span>
                </div>
              </div>
              <p>
                "My experience with this program was truly life-changing. The
                instructors were knowledgeable and always available to help, and
                the curriculum was structured in a way that made complex
                concepts easy to understand. The hands-on projects helped me
                build real-world skills, and I felt supported every step of the
                way. I highly recommend this course to anyone looking to advance
                their career!"
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={User3} alt="User 1" />
                <div>
                  <h3>James Doe</h3>
                  <span>University of California</span>
                </div>
              </div>
              <p>
                "My experience with this program was truly life-changing. The
                instructors were knowledgeable and always available to help, and
                the curriculum was structured in a way that made complex
                concepts easy to understand. The hands-on projects helped me
                build real-world skills, and I felt supported every step of the
                way. I highly recommend this course to anyone looking to advance
                their career!"
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={User4} alt="User 1" />
                <div>
                  <h3>Nancy Jhones</h3>
                  <span>University of California</span>
                </div>
              </div>
              <p>
                "From start to finish, this course was amazing. The balance
                between theory and practical work was perfect, and I really
                appreciated the attention to detail in the curriculum. The staff
                was extremely supportive, and I felt like I was in good hands
                throughout the entire journey. It’s an experience I will always
                cherish, and I recommend it to anyone serious about learning!"
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Testimonials;
