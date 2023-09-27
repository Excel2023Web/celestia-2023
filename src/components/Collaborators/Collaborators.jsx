import React from 'react';
import "./Collaborators.css";
import { careerlauncher } from '../../assets/gallery/collaborators';

const Collaborators = () => {
  return (
    <div className="collaborators__out__container" id="collaborators">
        <div className="collab-header" data-aos="zoom-in">
          Collaborators
        </div>
        <div className='collab__images'> 
          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            className="collab-section"
          >
            <img
              src={careerlauncher}
              alt=""
              className="c-images"
            ></img>
            <p>Career Launcher</p>
          </div>
        </div>
    </div>
  )
}

export default Collaborators