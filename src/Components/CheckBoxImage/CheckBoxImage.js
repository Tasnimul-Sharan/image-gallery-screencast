import React from 'react';
import "../ImageGallery/ImageGallery.css";

const CheckBoxImage = ({selected, toggleSelect, id, image }) => {
    return (
      <div className={`relative m-2 cursor-pointer big-image`}>
      <label className="image-container">
        <input
          type="checkbox"
          checked={selected}
          onChange={() => toggleSelect(id)}
          className={`checkbox ${selected ? "checkbox-hidden" : ""}`}
        />
        <img
          className="w-40 h-40 pointer-events-none border rounded-lg"
          src={image}
          alt="images"
        />
      </label>
    </div>
    );
};

export default CheckBoxImage;