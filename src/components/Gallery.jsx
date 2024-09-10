import React from "react";
import "../styles/Gallery.css";
import G1 from "../assests/gallery-1.png";
import G2 from "../assests/gallery-2.png";
import G3 from "../assests/gallery-3.png";
import G4 from "../assests/gallery-1.png";
import WhiteArrow from "../assests/white-arrow.png";

function Gallery() {
  return (
    <div>
      <div className="campus">
        <div className="gallery" id="Gallery">
          <img src={G1} alt="Picture1" className="Gal1" />
          <img src={G2} alt="Picture1" className="Gal1" />
          <img src={G3} alt="Picture1" className="Gal1" />
          <img src={G4} alt="Picture1" className="Gal1" />
        </div>
        <button className="btn dark-btn">
          See More <img src={WhiteArrow} alt="ArrowIcon" />
        </button>
      </div>
    </div>
  );
}

export default Gallery;
