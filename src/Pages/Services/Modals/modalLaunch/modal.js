import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import "./modal.css";
import { useTranslation } from "react-i18next";

import UXLAUNCH from '../../../../Assets/UX-launch-mobile.svg';
import ImgTwoLaunch from '../../../../Assets/imageOne-Launch.svg';
import ImgOneLaunch from '../../../../Assets/imageTwo-Launch.svg';

const ModalLaunch = props => {
  const { t } = useTranslation();
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
      in={props.show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
      <div className="modal" onClick={props.onClose}>
        <div className="main-modal">
          <div className="modal-container">
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <div className="modal-header">
                <h4 className="modal-title">{props.title}</h4>
                <img className="img-launch-ux-modal" src={UXLAUNCH} alt="" />
              </div>
              <div className="modal-body">{props.children}</div>
              <div className="modal-footer">
                <button onClick={props.onClose} className="button-modal-back">
                  {'<'}  {t("text-back")}
                </button>
              </div>
            </div>
            <div className="container-two-modal">
              <div className="card-container-two-modal">
                <div>
                  <img src={ImgTwoLaunch} alt="" />
                </div>
                <div className="text-container-two-modal">
                  <p>
                    {t("text18-designI")}
                  </p>
                </div>
              </div>
              <div className="card-container-two-modal">
                <div>
                  <img src={ImgOneLaunch} alt="" />
                </div>
                <div className="text-container-two-modal">
                  <p className="text-container-two-modal">
                    {t("text20-designI")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CSSTransition>,
    document.getElementById("root")
  );
};

export default ModalLaunch;
