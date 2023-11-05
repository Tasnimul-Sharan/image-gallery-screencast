import React, { useState } from "react";
import image1 from "../../images/image-1.webp";
import image2 from "../../images/image-2.webp";
import image3 from "../../images/image-3.webp";
import image4 from "../../images/image-4.webp";
import image5 from "../../images/image-5.webp";
import image6 from "../../images/image-6.webp";
import image7 from "../../images/image-7.webp";
import image8 from "../../images/image-8.webp";
import image9 from "../../images/image-9.webp";
import image10 from "../../images/image-10.jpeg";
import image11 from "../../images/image-11.jpeg";
import { FaCheckSquare } from "react-icons/fa";
import { IoIosImages } from "react-icons/io";
import "./ImageGallery.css";
import Dropzone from "react-dropzone";
import SortableList, { SortableItem } from "react-easy-sort";

const ImageGallery = () => {
  const [items, setItems] = useState([
    { id: "1", image: image1, selected: false },
    { id: "2", image: image2, selected: false },
    { id: "3", image: image3, selected: false },
    { id: "4", image: image4, selected: false },
    { id: "5", image: image5, selected: false },
    { id: "6", image: image6, selected: false },
    { id: "7", image: image7, selected: false },
    { id: "8", image: image8, selected: false },
    { id: "9", image: image9, selected: false },
    { id: "10", image: image10, selected: false },
    { id: "11", image: image11, selected: false },
  ]);

  const [selectedItems, setSelectedItems] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const toggleSelect = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, selected: !item.selected } : item
    );
    setItems(updatedItems);
    setSelectedItems(updatedItems.filter((item) => item.selected));
    setSelectAll(updatedItems.every((item) => item.selected));
  };

  const onDrop = (acceptedFiles) => {
    const newItems = acceptedFiles.map((file) => ({
      id: String(Date.now()),
      image: URL.createObjectURL(file),
      selected: false,
    }));
    setItems([...items, ...newItems]);
  };

  const onDelete = () => {
    const filteredImages = items.filter((img) => !img.selected);
    setItems(filteredImages);
    setSelectedItems([]);
  };

  const onSortEnd = (oldIndex, newIndex) => {
    const newItems = [...items];
    const [movedItem] = newItems.splice(oldIndex, 1);
    newItems.splice(newIndex, 0, movedItem);
    setItems(newItems);
  };


  const showGalleryText = selectedItems.length === 0;

  return (
<div className="container mx-auto bg-base-100 rounded-lg shadow-2xl p-4 md:p-10 m-2 md:m-10 py-4 md:py-10 w-full">
{showGalleryText && (
  <h1 className="text-2xl font-bold mb-2 md:mb-4 text-start ml-2 md:ml-3 border-spacing-y-80">
    Gallery
  </h1>
)}
<div className="flex flex-col md:flex-row justify-between border-spacing-x-5 items-center mb-2 md:mb-4">
  <div>
    {selectedItems.length > 0 && (
      <div className="flex items-center text-lg font-bold">
        <FaCheckSquare
          size={22}
          className="text-blue-600 borrder mx-1 md:mx-3"
        />
        {selectedItems.length} Files Selected
      </div>
    )}
  </div>
  {selectedItems.length > 0 && (
    <button onClick={onDelete} className="text-red-600 font-bold mt-2 md:mt-0">
      Delete Files
    </button>
  )}
</div>
<div className="border-b-2 border-base-300 my-4"></div>

  <SortableList onSortEnd={onSortEnd} draggedItemClassName="p-4 cursor-pointer border">

  <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-2">
  <div  className="grid lg:grid-cols-1 gap-2">

    {items
      .filter((_, index) => index === 0)
      .map(({ id, image, selected }) => (
        <SortableItem key={id}>
          <div className={`relative m-2 cursor-pointer big-image md:ml-10`}>
            <label className="image-container ">
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
        </SortableItem>
      ))}
    </div>
    <div className="grid lg:grid-cols-3 gap-4">
    {items
      .filter((_, index) => index > 0 && index <= 6)
      .map(({ id, image, selected }) => (
        <SortableItem key={id}>
          <div className={`relative m-2 cursor-pointer`}>
            <label className="image-container">
              <input
                type="checkbox"
                checked={selected}
                onChange={() => toggleSelect(id)}
                className={`checkbox ${selected ? "checkbox-hidden" : ""}`}
              />
              <img
                className="w-52 h-52 pointer-events-none border rounded-lg"
                src={image}
                alt="images"
              />
            </label>
          </div>
        </SortableItem>
     ) )}
    </div>
    </div>
    <div className="grid grid-cols-5 gap-3 lg:mr-5">
    {items
      .filter((_, index) => index > 0 && index > 6)
      .map(({ id, image, selected }) => (
        <SortableItem key={id}>
          <div className={`relative m-2 cursor-pointer`}>
            <label className="image-container">
              <input
                type="checkbox"
                checked={selected}
                onChange={() => toggleSelect(id)}
                className={`checkbox ${selected ? "checkbox-hidden" : ""}`}
              />
              <img
                className="w-52 h-52 pointer-events-none border rounded-lg"
                src={image}
                alt="images"
              />
            </label>
          </div>
        </SortableItem>
     ) )}
      <Dropzone onDrop={onDrop}>
        {({ getRootProps, getInputProps }) => (
          <div
            className="text-center border border-dashed p-4 md:p-10 flex flex-col items-center justify-center"
            {...getRootProps()}
          >
            <input {...getInputProps()} />
            <IoIosImages size={30} color="#000" />
            <p>Add Images</p>
          </div>
        )}
      </Dropzone>
    </div>
  </SortableList>
</div>

  );
};



export default ImageGallery;

