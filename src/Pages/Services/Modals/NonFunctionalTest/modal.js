import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import "./modal.css";


const NonFunctionalTeste= props => {
  const closeOnEscapeKeyDown = e => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  return ReactDOM.createPortal(
    <CSSTransition
      in={props.show1}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
      <div className="modal" onClick={props.onClose}>
        <div className="modal-container-non-functional">
          <div className="modal-content-non-functional " onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h4 className="modal-title-non-functional">{props.title}</h4>
            </div>
            <div className="modal-body">{props.children}</div>
            <div className="modal-footer">
              <button onClick={props.onClose} className="button-modal-back">
               {'<'} Back
              </button>
            </div>
          </div>
        </div>

      </div>
    </CSSTransition>,
    document.getElementById("root")
  );
};

export default NonFunctionalTeste;
