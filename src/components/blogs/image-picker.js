"use client"
import Image from "next/image";
import React, { useRef, useState } from "react";

export default function ImagePicker({ label, name}) {
  const [pickedImage, setPickedImage] = useState();
  const imageRef = useRef();

  function handlePickClick() {
    imageRef.current.click();
  }

  function handleImageChange(e) {
    const selectedImage = e.target.files[0];
    if (!selectedImage) {
      setPickedImage(null);
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setPickedImage(reader.result);
    }
    reader.readAsDataURL(selectedImage);
  }
  return (
    <div>
      <label htmlFor="file"></label>
      {/* show the preview after image is selected */}
      <div className="">
        {!pickedImage && <p>No image is picked yet</p> }
        {pickedImage && <Image src={pickedImage} alt="picked image" height={50} width={50}/>}
      </div>

      <input
        type="file"
        name={name}
        id={name}
        accept="image/png, image/jpg"
        required
        onChange={handleImageChange}
        ref={imageRef}
      />
      <button type="button" onClick={handlePickClick}>Pick an image</button>
    </div>
  );
}
