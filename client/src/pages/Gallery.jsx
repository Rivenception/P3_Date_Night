// Github repo for potential use
// https://github.com/xiaolin/react-image-gallery
import Carousels from "../components/Carousels"
import {useState} from 'react'
import axios from 'axios'
import PersonalizedCarousel from "../components/PersonalizedCarousel"
function Gallery() {
  const [newImage, setNewImage] = useState({
    title: "",
    images: [],
    user: ""
  })
  
  function handleNewImage(e){
    const file = e.target.files[0];
    let formData = new FormData();
        formData.append("upload_preset", "dateNight");
        formData.append("file", file)
        axios.post("https://api.cloudinary.com/v1_1/dwrc1dd2t/image/upload", formData)
          .then(res => setNewImage({...newImage, images: newImage.images.push(res.data.url)}))
          .then(res => console.log(newImage))
  }
  return (
    <div>
      <br />
      <h2 className="fancy">Gallery</h2>
      <br></br>
      {newImage.images.length ? 
      <Carousels />
      : <PersonalizedCarousel imageObj={newImage} />}
      <br></br>
      <input type="file" className="form-control-file" id="postNewImage" onChange= {handleNewImage} />
    </div>
  );
}
export default Gallery;
