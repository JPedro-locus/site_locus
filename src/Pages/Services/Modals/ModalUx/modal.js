import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import "./modal.css";
import { useTranslation } from "react-i18next";

import UXANALYSIS from '../../../../Assets/UX-ANALYSIS-mobile.svg';

import ImgTwoUx from '../../../../Assets/ImgOneUx.svg';
import ImgOneUx from '../../../../Assets/ImgTwoUx.svg';
import ImgThree from '../../../../Assets/service-visao.svg'

const ModalUx = props => {
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
      in={props.show1}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >

      <div className="modal" onClick={props.onClose}>
        <div className="main-modal">
          <div className="modal-container">
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <div className="modal-header">
                <h4 className="modal-title">{props.title}</h4>
                <img className="img-launch-ux-modal" src={UXANALYSIS} alt="" />
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
                  <img src={ImgTwoUx} alt="" />
                </div>
                <div className="text-container-two-modal">
                  <p className="title-card-mobile-service">
                    {t("text3-designI")}
                  </p>
                  <p>
                    {t("text4-designI")}
                  </p>
                </div>
              </div>
              <div className="card-container-two-modal">
                <div>
                  <img src={ImgOneUx} alt="" />
                </div>
                <div className="text-container-two-modal">
                  <p className="title-card-mobile-service">
                    {t("text5-designI")}
                  </p>
                  <p className="text-container-two-modal">
                    {t("text6-designI")}
                  </p>
                </div>
              </div>
              <div className="card-container-two-modal">
                <div>
                  <img src={ImgThree} alt="" />
                </div>
                <div className="text-container-two-modal">
                  <p className="title-card-mobile-service">
                    {t("text7-designI")}
                  </p>
                  <p className="text-container-two-modal">
                    {t("text8-designI")}
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

export default ModalUx;
