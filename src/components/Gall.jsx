import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router";

const Gall = () => {
  const [gallery, setgallery] = useState([]);
  console.log(gallery);
  useEffect(() => {
    axios
      .get(
        "http://localhost:2000/api/complaint/view-image/"
      )
      .then((response) => {
        if (response.data.success == true) {
          setgallery(response.data.data);
        }
      });
  }, []);
  return (

    <div className="row">
      <div className="col-md-12">
        <div id="mdb-lightbox-ui" style={{marginTop:"80px"}}/>
        <div className="mdb-lightbox no-margin">
          {gallery.map((data) => (
            <figure className="col-lg-4">
              
                <img
                  alt="picture"
                  src={`gallery/${data.Image}`}
                  className="img-fluid"
                />
              
            </figure>
          ))}


        </div>
      </div>
    </div>

  )
}

export default Gall