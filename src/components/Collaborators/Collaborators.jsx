import React from 'react';
import "./Collaborators.css";
import { careerlauncher } from '../../assets/gallery/collaborators';

const Collaborators = () => {
  return (
    <div className="collaborators__out__container" id="collaborators">
        <div className="collab-header" data-aos="zoom-in">
          Partners
        </div>
        <div className='collab__images'> 
          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            className="collab-section"
          >
            <a 
            href='https://www.careerlauncher.com/cochin'
            target="blank">
            <img
              src={careerlauncher}
              alt=""
              className="c-images"
            ></img>
            </a>
            <p>Career Launcher</p>
          </div>
        </div>
    </div>
  )
}

export default Collaborators