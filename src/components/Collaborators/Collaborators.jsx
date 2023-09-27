import React from 'react';
import "./Collaborators.css";
import { ukexpress,ksum,bosch,GulfLogo,careerlauncher} from '../../assets/gallery/collaborators';

const Collaborators = () => {
  return (
    <div className="collaborators__out__container" id="collaborators">
        <div className="collab-header" data-aos="zoom-in">
          Collaborators
        </div>
        <div className='collab__images'> 
        <div
            data-aos="zoom-in"
            data-aos-delay="150"
            className="collab-section"
          >
            <img
              src={ukexpress}
              alt=""
              className="c-images"
            ></img>
            <p>UK Xpress</p>
          </div>
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
          <div
            data-aos="zoom-in"
            data-aos-delay="250"
            className="collab-section"
          >
            <img src={GulfLogo} alt="" className="c-images"></img>
            <p>Gulf</p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="300"
            className="collab-section"
          >
            <img src={bosch} alt="" className="c-images"></img>
            <p>Bosch</p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-delay="150"
            className="collab-section"
          >
            <img
              src={ksum}
              alt=""
              className="c-images"
            ></img>
            <p>KSUM</p>
          </div>
        </div>
    </div>
  )
}

export default Collaborators