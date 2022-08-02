import React from "react";
import './Modal.scss'
import { RiCloseLine } from "react-icons/ri";
import GetPublicacion from "../GetPublicacion/GetPublicacion";
const Modal = ({setIsOpen, id}) => {

  

  return(
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
        <div className="centered">
          <div className="modalHeader">
            <h3 className="heading">Detalle</h3>
          </div>
          <button className="closeBtn" onClick={() => setIsOpen(false)}>
              <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className= "modalContent">
              <GetPublicacion id = {id}/>
          </div>

          <div className="modalActions">
              <div className="actionsContainer">
                <button className="cancelBtn" onClick={() => setIsOpen(false)}>
                  Cancel
                </button>
              </div>
          </div>
      </div>
      
    </>
)};

export default Modal;