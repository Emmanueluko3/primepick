import { Cloudinary } from "@cloudinary/url-gen";
import { useEffect, useState } from "react";

const ImageUpload = (input) => {
  const [myImage, SetMyImage] = useState("");

  const preset_key = process.env.REACT_APP_PRESET_KEY;
  // const cloud_name = process.env.REACT_APP_CLOUD_NAME;
  const api_url = process.env.REACT_APP_CLOUDINARY_URL;

  const formData = new FormData();
  formData.append("file", input);
  formData.append("upload _preset", preset_key);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(api_url, formData);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const myImage = await response.json();
        console.log(myImage);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return myImage;
};

export default ImageUpload;
