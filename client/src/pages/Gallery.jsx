// Github repo for potential use
// https://github.com/xiaolin/react-image-gallery
import Carousels from "../components/Carousels"
import {useState} from 'react'
import axios from 'axios'
import Carousel from 'react-bootstrap/Carousel'

function Gallery() {
  const [newImages, setNewImage] = useState([])
  const [post, setPost] = useState(false);

  function handleNewImage(e){
    e.preventDefault();

    let temp = newImages
    const file = e.target.files[0];
    let formData = new FormData();
        formData.append("upload_preset", "dateNight");
        formData.append("file", file)
        axios.post("https://api.cloudinary.com/v1_1/dwrc1dd2t/image/upload", formData)
          .then(res => temp.push(res.data.url))
          .then(res => setNewImage(temp))
          .then(res => console.log(newImages))
  }
  function handleClick(e){
    e.preventDefault();
    // window.location.reload(false)
    setPost(!post)
  }
  return (
    <div>
      <br />
      <h2 className="gallery">Gallery</h2>
      <br></br>
      {newImages.length ? (
        <div className="container">
          <Carousel>
        {newImages.map(element => {
          return (        
                <Carousel.Item>
                <img
                    className=" d-block w-100"
                    src={element}
                    alt="First slide"
                />
                {/* <Carousel.Caption>
                    <h3>Hiking Expedition</h3>
                    <p>Create new memories in the great outdoors.</p>
                </Carousel.Caption>  */}
            </Carousel.Item>
          )
        })}
          </Carousel>
        </div>
        ) : (
          <Carousels />
        )}
      
      <br></br>
      <input type="file" className="form-control-file" id="postNewImage" onChange= {handleNewImage} />
      <button type="submit" className="btn btn-danger mb-2" onClick={handleClick}>Post</button>
    </div>
  );
}
export default Gallery;
