import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import "./modal.css";
import { useTranslation } from "react-i18next";

import UIMODELATION from '../../../../Assets/UI-MODELATION.svg';


import ImgTwoUi from '../../../../Assets/imageOne-Ui.svg';
import ImgOneUi from '../../../../Assets/imageTwo-Ui.svg';
import ImgThreeUi from '../../../../Assets/service-testagem.svg';

const ModalUi = props => {
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
      in={props.show2}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
      <div className="modal" onClick={props.onClose}>
        <div className="main-modal">
          <div className="modal-container-ui">
            <div className="modal-content-ui" onClick={e => e.stopPropagation()}>
              <div className="modal-header">
                <h4 className="modal-title">{props.title}</h4>
                <img className="img-ui-modal" src={UIMODELATION} alt="" />
              </div>
              <div className="modal-body">{props.children}</div>
              <div className="modal-footer">
                <button onClick={props.onClose} className="button-modal-back">
                  {'<'}  {t("text-back")}
                </button>
              </div>
            </div>
            <div className="container-two-modal-ui">
              <div className="card-container-two-modal">
                <div>
                  <p className="title-card-mobile-service"> {t("text10-designI")}</p>
                  <img src={ImgOneUi} alt="" />
                </div>
                <div className="text-container-two-modal">
                  <p>
                    {t("text11-designI")}
                  </p>
                </div>
              </div>
              <div className="card-container-two-modal">
                <div>
                  <p className="title-card-mobile-service"> {t("text12-designI")}</p>
                  <img src={ImgTwoUi} alt="" />
                </div>
                <div className="text-container-two-modal">
                  <p className="text-container-two-modal">
                    {t("text13-designI")}
                  </p>
                </div>
              </div>
              <div className="card-container-two-modal">
                <div>
                  <p className="title-card-mobile-service"> {t("text14-designI")}</p>
                  <img src={ImgThreeUi} alt="" />
                </div>
                <div className="text-container-two-modal">
                  <p className="text-container-two-modal">
                    {t("text15-designI")}
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

export default ModalUi;
