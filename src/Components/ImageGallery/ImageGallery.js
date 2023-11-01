 /***************************************** */
//importent without any framework

// import React, { useState } from 'react';
// import image1 from "../../images/image-1.webp";
// import image2 from "../../images/image-2.webp";
// import image3 from "../../images/image-3.webp";
// import image4 from "../../images/image-4.webp";
// import image5 from "../../images/image-5.webp";
// import image6 from "../../images/image-6.webp";
// import image7 from "../../images/image-7.webp";
// import image8 from "../../images/image-8.webp";
// import image9 from "../../images/image-9.webp";
// import image10 from "../../images/image-10.jpeg";
// import image11 from "../../images/image-11.jpeg";
// import Dropzone from 'react-dropzone';
// import { IoIosImages } from 'react-icons/io';
// import './ImageGallery.css';
// import SortableList, { SortableItem } from 'react-easy-sort';

// const ImageGallery = () => {
//   const [images, setImages] = useState([
    // { id: '1', image: image1, selected: false },
    // { id: '2', image: image2, selected: false },
    // { id: '3', image: image3, selected: false },
    // { id: '4', image: image4, selected: false },
    // { id: '5', image: image5, selected: false },
    // { id: '6', image: image6, selected: false },
    // { id: '7', image: image7, selected: false },
    // { id: '8', image: image8, selected: false },
    // { id: '9', image: image9, selected: false },
    // { id: '10', image: image10, selected: false },
    // { id: '11', image: image11, selected: false },
//   ]);

//   const [selectedImages, setSelectedImages] = useState([]);

  // const onDrop = (acceptedFiles) => {
  //   const newImages = acceptedFiles.map((file) => ({
  //     id: String(Date.now()),
  //     image: URL.createObjectURL(file),
  //     isFeatured: false,
  //     selected: false,
  //   }));
  //   setImages([...images, ...newImages]);
  // };

  // const onDelete = () => {
  //   const filteredImages = images.filter((img) => !img.selected);
  //   setImages(filteredImages);
  //   setSelectedImages([]);
  // };

//   const onSetFeatureImage = (id) => {
//     const updatedImages = images.map((img) => ({
//       ...img,
//       isFeatured: img.id === id,
//     }));
//     setImages(updatedImages);
//   };

//   const toggleSelect = (id) => {
//     const updatedImages = images.map((img) => {
//       if (img.id === id) {
//         return { ...img, selected: !img.selected };
//       }
//       return img;
//     });
//     setSelectedImages(updatedImages.filter((img) => img.selected).map((img) => img.id));
//     setImages(updatedImages);
//   };

//   const toggleSelectAll = () => {
//     const allSelected = images.every((img) => img.selected);
//     const updatedImages = images.map((img) => ({
//       ...img,
//       selected: !allSelected,
//     }));
//     setSelectedImages(updatedImages.filter((img) => img.selected).map((img) => img.id));
//     setImages(updatedImages);
//   };

//   const handleDragStart = (e, id) => {
//     e.dataTransfer.setData("text/plain", id);
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//   };

  // const onSortEnd = (oldIndex, newIndex) => {
  //   const newItems = [...images];
  //   const [movedItem] = newItems.splice(oldIndex, 1);
  //   newItems.splice(newIndex, 0, movedItem);
  //   setImages(newItems);
  // };

  // const handleDrop = (e, targetId) => {
  //   e.preventDefault();
  //   const sourceId = e.dataTransfer.getData("text/plain");
  //   const updatedImages = [...images];
  //   const sourceIndex = updatedImages.findIndex((img) => img.id === sourceId);
  //   const targetIndex = updatedImages.findIndex((img) => img.id === targetId);

  //   if (sourceIndex !== -1 && targetIndex !== -1) {
  //     const [movedImage] = updatedImages.splice(sourceIndex, 1);
  //     updatedImages.splice(targetIndex, 0, movedImage);
  //     setImages(updatedImages);
  //   }
  // };

//   return (
//     <div>
//       <div className="flex justify-between items-center mb-4">
//         <div>
//           {selectedImages.length > 0 && (
//             <div className="flex items-center">
//               <input
//                 type="checkbox"
//                 checked={selectedImages.length === images.length}
//                 onChange={toggleSelectAll}
//                 className="mr-2"
//               />
//               {selectedImages.length} selected
//             </div>
//           )}
//         </div>
//         {selectedImages.length > 0 && (
//           <button onClick={onDelete} className="bg-red-500 text-white px-4 py-2 rounded-lg">
//             Delete Files
//           </button>
//         )}
//       </div>

//       <SortableList onSortEnd={onSortEnd} className="image-gallery">
//         {images.map((img) => (
//           <div
//             key={img.id}
//             onDragStart={(e) => handleDragStart(e, img.id)}
//             onDragOver={handleDragOver}
//             onDrop={(e) => handleDrop(e, img.id)}
//             className={` ${img.selected ? 'selected' : ''}`}
//           >
//             <input
//               type="checkbox"
//               checked={img.selected}
//               onChange={() => toggleSelect(img.id)}
//             />
//             <img
//               src={img.image}
//               alt={img.id}
//             />
//           </div>
//         ))}
//       </SortableList>

//       <Dropzone onDrop={onDrop}>
//   {({ getRootProps, getInputProps }) => (
//     <div className="text-center border flex flex-col items-center justify-center" {...getRootProps()}>
//       <input {...getInputProps()} />
//       <IoIosImages size={50} color="#007bff" />
//       <p>Add Images</p>
//     </div>
//   )}
// </Dropzone>

//     </div>
//   );
// };

// export default ImageGallery;


/********************************************/
//react-easy-sort

// import React from "react";
// import SortableList, { SortableItem } from "react-easy-sort";
// import { useState } from 'react';
// import image1 from "../../images/image-1.webp";
// import image2 from "../../images/image-2.webp";
// import image3 from "../../images/image-3.webp";
// import image4 from "../../images/image-4.webp";
// import image5 from "../../images/image-5.webp";
// import image6 from "../../images/image-6.webp";
// import image7 from "../../images/image-7.webp";
// import image8 from "../../images/image-8.webp";
// import image9 from "../../images/image-9.webp";
// import image10 from "../../images/image-10.jpeg";
// import image11 from "../../images/image-11.jpeg";

// const ImageGallery = () => {

//   const [items, setItems] = useState([
//     { id: '1', image: image1, selected: false },
//     { id: '2', image: image2, selected: false },
//     { id: '3', image: image3, selected: false },
//     { id: '4', image: image4, selected: false },
//     { id: '5', image: image5, selected: false },
//     { id: '6', image: image6, selected: false },
//     { id: '7', image: image7, selected: false },
//     { id: '8', image: image8, selected: false },
//     { id: '9', image: image9, selected: false },
//     { id: '10', image: image10, selected: false },
//     { id: '11', image: image11, selected: false },
//   ]);

//   const onSortEnd = (oldIndex, newIndex) => {
//     const newItems = [...items];
//     const [movedItem] = newItems.splice(oldIndex, 1);
//     newItems.splice(newIndex, 0, movedItem);
//     setItems(newItems);
//   };
//   return (
//     <SortableList onSortEnd={onSortEnd} className="flex flex-wrap" draggedItemClassName="shadow-md p-2 m-2 cursor-grab rounded-full">
//       {items.map(({ name, image }) => (
//         <SortableItem key={name}>
//           <div className="relative flex flex-shrink-0 m-2 cursor-grab">
//             <img
//               className="w-32 h-32 pointer-events-none"
//               src={image}
//               alt={name}
//             />
           
//           </div>
//         </SortableItem>
//       ))}
//     </SortableList>
//   );
// }


// export default ImageGallery;


/*************************************************** */

///////////final code 1///////

import React, { useState } from "react";
import SortableList, { SortableItem } from "react-easy-sort";
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
import { FaCheckSquare } from 'react-icons/fa';
import { IoIosImages } from 'react-icons/io';
import Dropzone from "react-dropzone";

const ImageGallery = () => {
  const [items, setItems] = useState([
    { id: '1', image: image1, selected: false },
    { id: '2', image: image2, selected: false },
    { id: '3', image: image3, selected: false },
    { id: '4', image: image4, selected: false },
    { id: '5', image: image5, selected: false },
    { id: '6', image: image6, selected: false },
    { id: '7', image: image7, selected: false },
    { id: '8', image: image8, selected: false },
    { id: '9', image: image9, selected: false },
    { id: '10', image: image10, selected: false },
    { id: '11', image: image11, selected: false },
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

  const handleSelectAll = () => {
    const selectAllValue = !selectAll;
    setSelectAll(selectAllValue);
    const updatedItems = items.map((item) => ({ ...item, selected: selectAllValue }));
    setItems(updatedItems);
    setSelectedItems(selectAllValue ? items : []);
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


//   return (
//     <div className="container mx-auto bg-base-100 rounded-lg shadow-2xl p-10 m-10 py-15 w-full">
//       {showGalleryText && (
//         <h1 className="text-2xl font-bold mb-4 text-start ml-3 border-spacing-y-80">Gallery</h1>
//       )}
//       <div className="flex justify-between border-spacing-x-5 items-center mb-4">
//         <div>
//           {selectedItems.length > 0 && (
//             <div className="flex items-center text-lg font-bold">
//               <FaCheckSquare className="text-blue-600 borrder mx-3" />
//               {selectedItems.length} Files Selected
//             </div>
//           )}
//         </div>
//         {selectedItems.length > 0 && (
//           <button onClick={onDelete} className="text-red-600 font-bold">
//             Delete Files
//           </button>
//         )}
//       </div>
//       <SortableList
//         onSortEnd={onSortEnd}
//         className="flex flex-wrap"
//         draggedItemClassName="shadow-md p-2 m-2 cursor-grab border"
//       >
//         {items.map(({ id, image, selected }) => (
//           <SortableItem key={id}>

//             <div className="relative flex flex-shrink-0 m-3 cursor-grab">
//               <input
//                 type="checkbox"
//                 checked={selected}
//                 onChange={() => toggleSelect(id)}
//                 className="absolute w-5 top-0 left-0 mt-2 ml-2 z-10"
//               />
//               <img
//                 className="w-40 h-40 pointer-events-none border rounded-lg"
//                 src={image}
//                 alt="images"
//               />
//             </div>
//           </SortableItem>
//         ))}
//         <Dropzone onDrop={onDrop}>
//           {({ getRootProps, getInputProps }) => (
//             <div className="text-center border p-10 flex flex-col items-center justify-center" {...getRootProps()}>
//               <input {...getInputProps()} />
//               <IoIosImages size={30} color="#007bff" />
//               <p>Add Images</p>
//             </div>
//           )}
//         </Dropzone>
//       </SortableList>

//     </div>
//   );
// };


return (
  <div className="container mx-auto bg-base-100 rounded-lg shadow-2xl p-10 m-10 py-15 w-full">
    {showGalleryText && (
      <h1 className="text-2xl font-bold mb-4 text-start ml-3 border-spacing-y-80">Gallery</h1>
    )}
    <div className="flex justify-between border-spacing-x-5 items-center mb-4">
      <div>
        {selectedItems.length > 0 && (
          <div className="flex items-center text-lg font-bold">
            <FaCheckSquare className="text-blue-600 borrder mx-3" />
            {selectedItems.length} Files Selected
          </div>
        )}
      </div>
      {selectedItems.length > 0 && (
        <button onClick={onDelete} className="text-red-600 font-bold">
          Delete Files
        </button>
      )}
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 sm:grid-cols-2 pb-5 gap-2">
      <div className="lg:col-span-1">
        <SortableList
          onSortEnd={onSortEnd}
          className="flex flex-col"
          draggedItemClassName="shadow-md p-2 m-2 cursor-grab border"
        >
          {items.slice(0, 1).map(({ id, image, selected }) => (
            <SortableItem key={id}>
              <div className="relative cursor-grab">
                <input
                  type="checkbox"
                  checked={selected}
                  onChange={() => toggleSelect(id)}
                  className="absolute w-5 top-0 left-0 mt-2 ml-2 z-10"
                />
                <img
                  className="w-80 h-80 pointer-events-none border rounded-lg"
                  src={image}
                  alt="images"
                />
              </div>
            </SortableItem>
          ))}
        </SortableList>
      </div>
      <div className="lg:col-span-1">
        <SortableList
          onSortEnd={onSortEnd}
          className="grid grid-cols-3 gap-4"
          draggedItemClassName="shadow-md p-2 m-2 cursor-grab border"
        >
          {items.slice(1, 7).map(({ id, image, selected }) => (
            <SortableItem key={id}>
              <div className="relative cursor-grab">
                <input
                  type="checkbox"
                  checked={selected}
                  onChange={() => toggleSelect(id)}
                  className="absolute w-5 top-0 left-0 mt-2 ml-2 z-10"
                />
                <img
                  className="w-40 h-40 pointer-events-none border rounded-lg"
                  src={image}
                  alt="images"
                />
              </div>
            </SortableItem>
            ))}
        </SortableList>
      </div>
    </div>
    <SortableList
      onSortEnd={onSortEnd}
      className="grid grid-cols-5 gap-4"
      draggedItemClassName="shadow-md p-2 m-2 cursor-grab border"
    >
      {items.slice(7).map(({ id, image, selected }) => (
        <SortableItem key={id}>
          <div className="relative cursor-grab">
            <input
              type="checkbox"
              checked={selected}
              onChange={() => toggleSelect(id)}
              className="absolute w-5 top-0 left-0 mt-2 ml-2 z-10"
            />
            <img
              className="w-40 h-40 pointer-events-none border rounded-lg"
              src={image}
              alt="images"
            />
          </div>
        </SortableItem>
      ))}
    <Dropzone onDrop={onDrop}>
      {({ getRootProps, getInputProps }) => (
        <div className="text-center border flex flex-col items-center justify-center" {...getRootProps()}>
          <input {...getInputProps()} />
          <IoIosImages size={30} color="#007bff" />
          <p>Add Images</p>
        </div>
      )}
    </Dropzone>
    </SortableList>
  </div>
);
};

export default ImageGallery;


/************************************/


// import React, { useState } from "react";
// import SortableList, { SortableItem } from "react-easy-sort";
// import image1 from "../../images/image-1.webp";
// import image2 from "../../images/image-2.webp";
// import image3 from "../../images/image-3.webp";
// import image4 from "../../images/image-4.webp";
// import image5 from "../../images/image-5.webp";
// import image6 from "../../images/image-6.webp";
// import image7 from "../../images/image-7.webp";
// import image8 from "../../images/image-8.webp";
// import image9 from "../../images/image-9.webp";
// import image10 from "../../images/image-10.jpeg";
// import image11 from "../../images/image-11.jpeg";
// import { FaCheckSquare } from 'react-icons/fa';
// import { IoIosImages } from 'react-icons/io';
// import Dropzone from "react-dropzone";

// const ImageGallery = () => {
//   const [items, setItems] = useState([
//     { id: '1', image: image1, selected: false },
//     { id: '2', image: image2, selected: false },
//     { id: '3', image: image3, selected: false },
//     { id: '4', image: image4, selected: false },
//     { id: '5', image: image5, selected: false },
//     { id: '6', image: image6, selected: false },
//     { id: '7', image: image7, selected: false },
//     { id: '8', image: image8, selected: false },
//     { id: '9', image: image9, selected: false },
//     { id: '10', image: image10, selected: false },
//     { id: '11', image: image11, selected: false },
//   ]);

//   const [selectedItems, setSelectedItems] = useState([]);
//   const [selectAll, setSelectAll] = useState(false);

//   const toggleSelect = (id) => {
//     const updatedItems = items.map((item) =>
//       item.id === id ? { ...item, selected: !item.selected } : item
//     );

//     setItems(updatedItems);
//     setSelectedItems(updatedItems.filter((item) => item.selected));
//     setSelectAll(updatedItems.every((item) => item.selected));
//   };

//   const handleSelectAll = () => {
//     const selectAllValue = !selectAll;
//     setSelectAll(selectAllValue);
//     const updatedItems = items.map((item) => ({ ...item, selected: selectAllValue }));
//     setItems(updatedItems);
//     setSelectedItems(selectAllValue ? items : []);
//   };

//   const onDrop = (acceptedFiles) => {
//     const newItems = acceptedFiles.map((file) => ({
//       id: String(Date.now()),
//       image: URL.createObjectURL(file),
//       isFeatured: false,
//       selected: false,
//     }));
//     setItems([...items, ...newItems]);
//   };

//   const onDelete = () => {
//     const filteredImages = items.filter((img) => !img.selected);
//     setItems(filteredImages);
//     setSelectedItems([]);
//   };

//   const onSortEnd = (oldIndex, newIndex) => {
//     const newItems = [...items];
//     const [movedItem] = newItems.splice(oldIndex, 1);
//     newItems.splice(newIndex, 0, movedItem);
//     setItems(newItems);
//   };

//   return (
//     <div className="container mx-auto">
//       <div className="grid grid-cols-5 gap-4">
//         <div className="col-span-1">
//           <div>
//             <img className="w-40 h-40" src={image1} alt="Image 1" />
//           </div>
//         </div>
//         <div className="col-span-2">
//           <SortableList
//             onSortEnd={onSortEnd}
//             className="grid grid-cols-3 gap-4"
//             draggedItemClassName="shadow-md p-2 m-2 cursor-grab rounded-full"
//           >
//             {items.slice(2, 8).map(({ id, image, selected }) => (
//               <SortableItem key={id}>
//                 <div className="relative flex flex-shrink-0 m-2 cursor-grab">
//                   <input
//                     type="checkbox"
//                     checked={selected}
//                     onChange={() => toggleSelect(id)}
//                   />
//                   <img
//                     className="w-40 h-40 pointer-events-none"
//                     src={image}
//                     alt={`Image ${id}`}
//                   />
//                 </div>
//               </SortableItem>
//             ))}
//           </SortableList>
//         </div>
//         <div className="col-span-2">
//           <SortableList
//             onSortEnd={onSortEnd}
//             className="grid grid-cols-2 gap-4"
//             draggedItemClassName="shadow-md p-2 m-2 cursor-grab rounded-full"
//           >
//             {items.slice(8).map(({ id, image, selected }) => (
//               <SortableItem key={id}>
//                 <div className="relative flex flex-shrink-0 m-2 cursor-grab">
//                   <input
//                     type="checkbox"
//                     checked={selected}
//                     onChange={() => toggleSelect(id)}
//                   />
//                   <img
//                     className="w-40 h-40 pointer-events-none"
//                     src={image}
//                     alt={`Image ${id}`}
//                   />
//                 </div>
//               </SortableItem>
//             ))}
//           </SortableList>
//         </div>
//         <div className="col-span-1">
//           <Dropzone onDrop={onDrop}>
//             {({ getRootProps, getInputProps }) => (
//               <div className="text-center border px-6 flex flex-col items-center justify-center" {...getRootProps()}>
//                 <input {...getInputProps()} />
//                 <IoIosImages size={50} color="#007bff" />
//                 <p>Add Images</p>
//               </div>
//             )}
//           </Dropzone>
//           {selectedItems.length > 0 && (
//             <button onClick={onDelete} className="text-red-600">
//               Delete Files
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ImageGallery;
