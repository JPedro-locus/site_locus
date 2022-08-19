import React, { useState, useRef, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { useWindowSize } from '../../hooks/useResize';
import Axios from 'axios';
import { useTranslation } from "react-i18next";
import Carousel, { consts } from 'react-elastic-carousel';
import GreenLoading from '../../Assets/green-load.svg';
import Check from '../../Assets/check.svg';
import { Link } from "react-router-dom";
<<<<<<< HEAD
=======
import { CSSTransition } from "react-transition-group";
>>>>>>> main
import {
  ContactMain,
  FirstSection,
  SecondSection,
  ThirdSection,
  FourthSection,
  StyledCards,
  StyledMap,
  StyledMapCard,
  StyledCardsContainer,
  StyledMapContainer,
  StyledContactWays,
  StyledMaxWidth,
  StyledWaveContainer,
  StyledMainContent,
  StyledSecondCards,
  StyledSecondCard,
  StyledForms,
  StyledFlexRow,
  StyledCheckbox,
  StyledTextInput,
  StyledRowForms,
  StyledRange,
  StyledRangeValues,
  StyledSendButton,
  StyledButtonContainer,
  StyledCardsContainerMobile,
  StyledCardsMobile,
  StyledPath,
<<<<<<< HEAD
  StyledPoint
=======
  StyledPoint,
  MainModal,
  StyledMapDesktop
>>>>>>> main
}
  from "./styles";
import Card from './Card';
import vectorContact from "../../Assets/vector-contact.svg";
import astronautContact from "../../Assets/astronaut-contact.svg";
import squareContact from "../../Assets/square-contact.svg";
import messageContact from "../../Assets/mensage-contact.svg";
import desktopContact from "../../Assets/desktop-contact.svg";
import mapContact from "../../Assets/map-contact.svg";
import anexoContato from "../../Assets/anexo-contato.svg";
import botaoFechar from "../../Assets/botao-menu-fechar-contato.svg";
import emailContato from "../../Assets/email-contato.svg";
import astroContato from "../../Assets/astro-contato.svg";
import Map from '../../Assets/mapa.svg';
import Icon1 from '../../Assets/Icon1-contact.svg';
import Icon2 from '../../Assets/Icon2-contact.svg';
import Icon3 from '../../Assets/Icon3-contact.svg';
import Icon4 from '../../Assets/Icon4-contact.svg';
import Icon5 from '../../Assets/Icon5-contact.svg';
import wave from "../../Pages/images/Onda.svg";
<<<<<<< HEAD

=======
import MapDesktop from '../../Assets/mapa-desktop.svg';
>>>>>>> main
import Whatsapp from '../../Assets/whatsapp.svg';
import Linkedin from '../../Assets/linkedin.svg';
import Email from '../../Assets/email.svg';
import Phone from '../../Assets/telefone.svg';
<<<<<<< HEAD

const Contact = () => {
=======
import circleMap from '../../Assets/circle-map.svg';
import lineMap from '../../Assets/line-map.svg';

const Contact = props => {
>>>>>>> main
  const form = useRef();
  const [imageSelected, setImageSelected] = useState("");
  const [rangeSelected, setRangeSelected] = useState(500);
  const [urlImage, setUrlImage] = useState("");
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState('SEND');
<<<<<<< HEAD
=======
  const [modalSent, setModalSent] = useState('modalHidden');
>>>>>>> main

  const sendEmail = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "qatvkqvb");
    setStatus('loading');

    Axios.post("https://api.cloudinary.com/v1_1/locussystem/image/upload", formData).then(response => {
      setUrlImage(response.data.url)
    });

    setTimeout(() => {
      emailjs.sendForm('service_yvh6g37', 'template_bucz0b6', form.current, 'user_RsU3x3g9D1XtbjMzbZL2I')
        .then((result) => {
          console.log(result.text);
<<<<<<< HEAD
=======
          setModalSent('modalVisible');

>>>>>>> main
          setStatus('enviado');
        }, (error) => {
          console.log(error.text);
        });
      e.target.reset();
      setStatus('enviado');
    }, 2000);
  }

  const handleCopy = () => {
    navigator.clipboard.writeText("+55 (81) 9 0000-0000");
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, [3000]);
  }

  const [width, height] = useWindowSize();
  const [itemsToShow, setItemsToShow] = useState(3);
  const { t } = useTranslation();

  useEffect(() => {
    if (width < 590) {
<<<<<<< HEAD
      setItemsToShow(1);
    } else if (width < 700) {
=======
      setItemsToShow(2);
    } else if (width < 900) {
>>>>>>> main
      setItemsToShow(2);
    } else {
      setItemsToShow(3);
    }
  }, [width]);

  const breakPoints = [
    { width: 380, itemsToShow },
  ];

<<<<<<< HEAD
=======

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

>>>>>>> main
  const buttonContainer = () => {
    if (status === 'loading') {
      return <img src={GreenLoading} alt="Icone de carregamento" />
    } else if (status === 'SEND') {
      return <p>SEND</p>
    }
    return (
<<<<<<< HEAD
    <p>
      SENT 
      <div className="background">
        <img className="check" src={Check} alt="Icone de check" />
      </div>
    </p>
=======
      <p>
        SENT
        <div className="background">
          <img className="check" src={Check} alt="Icone de check" />
        </div>
      </p>
>>>>>>> main
    );
  }

  return (
    <ContactMain>
<<<<<<< HEAD
=======
      <MainModal onClick={() => setModalSent('modalHidden')} >
        {/* Modal send */}
        <div onClick={props.onClose} className={modalSent}>
          <div onClick={e => e.stopPropagation()} className='box-sucess'>
            <div className="sucesso">
              <h1>SEU FORMULÁRIO FOI ENVIADO COM SUCESSO!</h1>
              <div onClick={() => setModalSent('modalHidden')} className="fechar">
                <p>FECHAR</p>
                <img src={botaoFechar} />
              </div>
            </div>
            <div className="text-astro">
              <div className="text">
                <img src={emailContato} />
                <h2>Em breve entraremos em contato com você para conversar-mos sobre seu projeto.</h2>
              </div>
              <div className="astro">
                <img src={astroContato} />
              </div>
            </div>
          </div>
        </div>
      </MainModal>
>>>>>>> main
      <FirstSection>
        <section className="container">
          <div className="text-cards">
            <div className="title">
              <div className="contact-path">
                <Link className="link-services" to="/">Home</Link>
                <p className="separator"><b>/</b></p>
<<<<<<< HEAD
                <p><b>Services</b></p>
=======
                <p><b>Contact</b></p>
>>>>>>> main
              </div>
              <h1>GOT A PROJECT IN MIND?</h1>
              <h2>Fill in this form or SEND US AN EMAIL</h2>
            </div>
            <div className="wrap-cards">
              <div className="cards">
                <img src={vectorContact} alt="vetor" />
                <p>Our goal is to deliver your proposal as quickly as possible.</p>
              </div>
              <div className="cards">
                <img src={vectorContact} alt="vetor" />
                <p>We’ll answer your first contact within 36h</p>
              </div>
              <div className="cards">
                <img src={vectorContact} alt="vetor" />
                <p>We present you a proposal within 10 days</p>
              </div>
              <div className="cards">
                <img src={vectorContact} alt="vetor" />
                <p>We will provide a NDA signature, if necessary</p>
              </div>
            </div>
          </div>
          <div className="astronaut">
            <img src={astronautContact} />
          </div>
        </section>
      </FirstSection>
      <SecondSection>
        <StyledMainContent ref={form} onSubmit={(e) => sendEmail(e)}>
<<<<<<< HEAD
          <h1>Let’s Talk</h1>
=======
          <h1 className='lets-talk'>Let’s Talk</h1>
>>>>>>> main
          <StyledFlexRow>
            <StyledSecondCards>
              <StyledSecondCard>
                <StyledCheckbox type="checkbox" name="design" value="design" />
                <img src={squareContact} alt="Icone" />
                <div>
                  <h3>Design</h3>
                  <ul>
                    <li>Digital product Development</li>
                    <li>Design Inception</li>
                  </ul>
                </div>
              </StyledSecondCard>
              <StyledSecondCard>
                <StyledCheckbox type="checkbox" name="development" value="development" />
                <img src={squareContact} alt="Icone" />
                <div>
                  <h3>Development</h3>
                  <ul>
                    <li>Custom Software Development</li>
                    <li>Staff Augmentation Squad</li>
                    <li>Squad Outsourcing</li>
                  </ul>
                </div>
              </StyledSecondCard>
              <StyledSecondCard>
                <StyledCheckbox type="checkbox" name="consultoria" value="consulting" />
                <img src={desktopContact} alt="Icone" />
                <div>
                  <h3>Consultoria</h3>
                  <ul>
                    <li>CTO as a Service QA</li>
                    <li>QA - Test Factory</li>
                    <li>Cloud Security</li>
                  </ul>
                </div>
              </StyledSecondCard>
            </StyledSecondCards>
            <StyledForms>
              <StyledRowForms>
                <StyledTextInput>
                  <label>NAME*</label>
                  <input type="text" name="name" required />
                </StyledTextInput>
                <StyledTextInput className='withMargin'>
                  <label>COMPANY NAME*</label>
                  <input type="text" name="company_name" required />
                </StyledTextInput>
              </StyledRowForms>
              <StyledRowForms>
                <StyledTextInput>
                  <label>EMAIL*</label>
                  <input type="email" name="email" required />
                </StyledTextInput>
                <StyledTextInput className='withMargin'>
                  <label>DEADLINE*</label>
                  <select name="meses">
<<<<<<< HEAD
=======
                    <option value="1 a 3 meses">Choose an option</option>
>>>>>>> main
                    <option value="1 a 3 meses">From 1 to 3 months</option>
                    <option value="3 a 6 meses">From 3 to 6 months</option>
                    <option value="6 a 12 meses">From 6 to 12 months</option>
                    <option value="mais de um ano">More than one year</option>
                  </select>
                </StyledTextInput>
              </StyledRowForms>
              <StyledTextInput>
                <label>TELL US</label>
                <input className="conte" name="conte" type="text" />
                <label className="input-conte" htmlFor="arquivo"><img src={anexoContato} alt="Icone de anexo" /></label>
                <input
                  type="file"
                  id="arquivo"
                  hidden
                  onChange={(e) => { setImageSelected(e.target.files[0]) }}
                />
                <p>{imageSelected.name || "You can also attach a file"}</p>
                <input type="text" name="my_file" value={urlImage} style={{ display: 'none' }} />
              </StyledTextInput>
            </StyledForms>
          </StyledFlexRow>
          <StyledRange>
            <h2>{`YOUR BUDGET IS $ ${rangeSelected}.000,00`}</h2>
<<<<<<< HEAD
            <input min="0" max="1000" name="range" type="range" onChange={(e) => { setRangeSelected(e.target.value) }} />
            <StyledRangeValues>
              <StyledPoint>$ 20K</StyledPoint>
              <StyledPoint>$ 100K</StyledPoint>
              <StyledPoint>$ 200K</StyledPoint>
              <StyledPoint>$ 300K</StyledPoint>
              <StyledPoint>$ 400K</StyledPoint>
              <StyledPoint>$ 500K</StyledPoint>
              <StyledPoint>$ 600K</StyledPoint>
              <StyledPoint>$ 700K</StyledPoint>
              <StyledPoint>$ 800K</StyledPoint>
              <StyledPoint>$ 900K</StyledPoint>
=======
            <input min="20" max="1000" step="20" name="range" type="range" onChange={(e) => { setRangeSelected(e.target.value) }} />
            <StyledRangeValues>
              <StyledPoint>$ 20K</StyledPoint>
>>>>>>> main
              <StyledPoint>$ 1M</StyledPoint>
            </StyledRangeValues>
          </StyledRange>
          <StyledButtonContainer>
            <StyledSendButton type="submit">
              {buttonContainer()}
            </StyledSendButton>
          </StyledButtonContainer>
        </StyledMainContent>
      </SecondSection>
      <ThirdSection>
        <StyledMaxWidth>
          <h1>What happens next?</h1>
          <StyledCards>
            <Card position="center" icon={Icon1} description="After we receive your contact data, the commercial team will be in touch with you within 36 hours through one of the provided channels." index="1" />
            <Card position="flex-end" icon={Icon2} description="We will schedule a meeting to deeply understand your needs. We’ll provide a meeting with our technical staff if necessary." index="2" />
            <Card position="center" icon={Icon3} description="After mapping your reality, we’ll meet with the technical team to build a proposal with the best team to meet your demand, with the best Locus service/process." index="3" />
            <Card position="flex-start" icon={Icon4} description="We’ll schedule a meet to discuss the presented work plan." index="4" />
            <Card position="center" icon={Icon5} description="We’ll sign a commercial contract and start the project execution on the agreed date." index="5" />
          </StyledCards>
          <StyledCardsMobile>
<<<<<<< HEAD
            <Carousel breakPoints={breakPoints}>
=======
            <Carousel pagination={false} breakPoints={breakPoints}>
>>>>>>> main
              <Card position="center" icon={Icon1} description="After we receive your contact data, the commercial team will be in touch with you within 36 hours through one of the provided channels." index="1" />
              <Card position="flex-end" icon={Icon2} description="We will schedule a meeting to deeply understand your needs. We’ll provide a meeting with our technical staff if necessary." index="2" />
              <Card position="center" icon={Icon3} description="After mapping your reality, we’ll meet with the technical team to build a proposal with the best team to meet your demand, with the best Locus service/process." index="3" />
              <Card position="flex-start" icon={Icon4} description="We’ll schedule a meet to discuss the presented work plan." index="4" />
              <Card position="center" icon={Icon5} description="We’ll sign a commercial contract and start the project execution on the agreed date." index="5" />
            </Carousel>
          </StyledCardsMobile>
        </StyledMaxWidth>
        <StyledWaveContainer>
          <img className="wave-animation" src={wave} alt="" />
        </StyledWaveContainer>
      </ThirdSection>
      <FourthSection>
        <StyledCardsContainerMobile>
<<<<<<< HEAD
          {/* <a target="_blank" href="https://wa.me/81900000000" rel="noreferrer">
            <StyledMapCard>
              <img src={Whatsapp} alt="Icone da rede social" />
              <h3>mensage-nos</h3>
              <p>+55 81 0 0000 0000</p>
            </StyledMapCard>
          </a> */}
          <a target="_blank" href="https://www.linkedin.com/company/locus-custom-software/mycompany/" rel="noreferrer">
            <StyledMapCard>
              <img src={Linkedin} alt="Icone da rede social" />
              <h3>Linke-nos</h3>
=======
          <a target="_blank" href="https://wa.me/8194939493" rel="noreferrer">
            <StyledMapCard>
              <img src={Whatsapp} alt="Icone da rede social" />
              <h3>Whatsapp</h3>
              <p>+55 81 9 94939493</p>
            </StyledMapCard>
          </a>
          <a target="_blank" href="https://www.linkedin.com/company/locus-custom-software/mycompany/" rel="noreferrer">
            <StyledMapCard>
              <img src={Linkedin} alt="Icone da rede social" />
              <h3>Linkedin</h3>
>>>>>>> main
            </StyledMapCard>
          </a>
          <a>
            <StyledMapCard onClick={() => window.scrollTo({ top: 850, behavior: 'smooth' })}>
              <img src={Email} alt="Icone da rede social" />
<<<<<<< HEAD
              <h3>E-mail-nos</h3>
=======
              <h3>email us at</h3>
>>>>>>> main
              <p>contact@locus.software</p>
            </StyledMapCard>
          </a>
          {/* <a>
            <StyledMapCard onClick={() => handleCopy()}>
              <img src={Phone} alt="Icone da rede social" />
              <h3>Ligue-nos</h3>
              <p>+55 81 0 0000 0000</p>
            </StyledMapCard>
          </a> */}
        </StyledCardsContainerMobile>
        <h1>Our offices</h1>
        <StyledMapContainer>
          <div className="address-pt">
            <p>
              Francisco
              Carqueja  St , 179 <br />
              Porto <br />
              PORTUGAL <br />
            </p>
            <a target="_blank" href="https://www.google.com.br/maps/place/R.+Francisco+Carqueja+179,+4350-085+Porto,+Portugal/@41.1602458,-8.5942359,17z/data=!3m1!4b1!4m5!3m4!1s0xd24648a835fb095:0x4e27cabe62fce2d6!8m2!3d41.1602418!4d-8.5920419">
              {/* <button>
                See on map {'>'}
              </button> */}
            </a>
          </div>
          <div className="address-br">
            <p>
              Do Brum St, 455 <br />
              Recife-PE <br />
              BRAZIL <br />
            </p>
            <a target="_blank" href="https://www.google.com.br/maps/place/R.+do+Brum,+455+-+Recife+Velho,+Recife+-+PE,+50030-260/@-8.0566728,-34.8713984,3a,75y,271.58h,98.65t/data=!3m7!1e1!3m5!1s2ByVncFZG7UR4Drt05MdMg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3D2ByVncFZG7UR4Drt05MdMg%26cb_client%3Dsearch.gws-prod.gps%26w%3D360%26h%3D120%26yaw%3D301.33868%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192!4m5!3m4!1s0x7ab1898681f140d:0x8efaf47703f4eae!8m2!3d-8.0566289!4d-34.871463">
              {/* <button>
                See on map {'>'}
              </button> */}
            </a>
          </div>
          <StyledMap src={Map} alt="Imagem do mapa" />
<<<<<<< HEAD
          <StyledContactWays>
            <h2 className="disable">Contact Us</h2>
            <StyledCardsContainer>
              {/* <a target="_blank" href="https://wa.me/81900000000" rel="noreferrer">
                <StyledMapCard>
                  <img src={Whatsapp} alt="Icone da rede social" />
                  <h3>mensage-nos</h3>
                  <p>+55 81 0 0000 0000</p>
                </StyledMapCard>
              </a> */}
              <a target="_blank" href="https://www.linkedin.com/company/locus-custom-software/mycompany/" rel="noreferrer">
                <StyledMapCard>
                  <img src={Linkedin} alt="Icone da rede social" />
                  <h3>Linke-nos</h3>
=======
          <StyledMapDesktop>
            <img src={MapDesktop} />
            <div className='recife-container'>
              <div className='opacity-pt'></div>
              <p className='recife'>RECIFE</p>
              <div className='line-map' ></div>
              <img className='circle-map' src={circleMap} />
              <div className="address-br-desktop">
                <p>
                  Do Brum St, 455 <br />
                  Recife-PE <br />
                  BRAZIL <br />
                </p>
                <a target="_blank" href="https://www.google.com.br/maps/place/R.+do+Brum,+455+-+Recife+Velho,+Recife+-+PE,+50030-260/@-8.0566728,-34.8713984,3a,75y,271.58h,98.65t/data=!3m7!1e1!3m5!1s2ByVncFZG7UR4Drt05MdMg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3D2ByVncFZG7UR4Drt05MdMg%26cb_client%3Dsearch.gws-prod.gps%26w%3D360%26h%3D120%26yaw%3D301.33868%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192!4m5!3m4!1s0x7ab1898681f140d:0x8efaf47703f4eae!8m2!3d-8.0566289!4d-34.871463">
                  {/* <button>
                    See on map {'>'}
                  </button> */}
                </a>
              </div>
            </div>
            <div className='pt-container'>
              <p className='portugal'>PORTO</p>
              <div className='line-map-pt' ></div>
              <img className='circle-map-pt' src={circleMap} />
              <div className="address-pt-desktop">
                Francisco
                Carqueja  St, 179 <br />
                Porto <br />
                PORTUGAL <br />
                <a target="_blank" href="https://www.google.com.br/maps/place/R.+do+Brum,+455+-+Recife+Velho,+Recife+-+PE,+50030-260/@-8.0566728,-34.8713984,3a,75y,271.58h,98.65t/data=!3m7!1e1!3m5!1s2ByVncFZG7UR4Drt05MdMg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3D2ByVncFZG7UR4Drt05MdMg%26cb_client%3Dsearch.gws-prod.gps%26w%3D360%26h%3D120%26yaw%3D301.33868%26pitch%3D0%26thumbfov%3D100!7i16384!8i8192!4m5!3m4!1s0x7ab1898681f140d:0x8efaf47703f4eae!8m2!3d-8.0566289!4d-34.871463">
                  {/* <button>
                    See on map {'>'}
                  </button> */}
                </a>
              </div>
            </div>

          </StyledMapDesktop>
          <StyledContactWays>
            <h2 className="disable">Contact Us</h2>
            <StyledCardsContainer>
              <a target="_blank" href="https://wa.me/81994939493" rel="noreferrer">
                <StyledMapCard>
                  <img src={Whatsapp} alt="Icone da rede social" />
                  <h3>Whatsapp</h3>
                  <p>+55 81 9 9493-9493</p>
                </StyledMapCard>
              </a>
              <a target="_blank" href="https://www.linkedin.com/company/locus-custom-software/mycompany/" rel="noreferrer">
                <StyledMapCard>
                  <img src={Linkedin} alt="Icone da rede social" />
                  <h3>Linkedin</h3>
>>>>>>> main
                </StyledMapCard>
              </a>
              <StyledMapCard onClick={() => window.scrollTo({ top: 850, behavior: 'smooth' })}>
                <img src={Email} alt="Icone da rede social" />
<<<<<<< HEAD
                <h3>E-mail-nos</h3>
=======
                <h3>email us at</h3>
>>>>>>> main
                <p>contact@locus.software</p>
              </StyledMapCard>
              {/* <StyledMapCard onClick={() => handleCopy()}>
                <img src={Phone} alt="Icone da rede social" />
                <h3>Ligue-nos</h3>
                <p>+55 81 0 0000 0000</p>
              </StyledMapCard> */}
            </StyledCardsContainer>
          </StyledContactWays>
        </StyledMapContainer>
      </FourthSection>
    </ContactMain>
  )
}

export default Contact
