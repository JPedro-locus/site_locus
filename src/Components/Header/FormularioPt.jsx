import { Component } from "react";
import {Formulario} from "./FormularioPt.styles";

class FormularioEN extends Component{
    componentDidMount(){
        new window.RDStationForms('form-news-pt-bbc011f48cbe1d8acb20', 'UA-225202853-1').createForm()

    }
    render(){
        return(
            <Formulario>
                    <div className="newsLetter">
                        <div role="main" id="form-news-pt-bbc011f48cbe1d8acb20"></div>
                    </div>
            </Formulario>
        )
    }
}

export default FormularioEN;