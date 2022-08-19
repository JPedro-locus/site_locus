import { Component } from "react";
import {Formulario} from "./FormularioEn.styles";

class FormularioEN extends Component{
    componentDidMount(){
        new window.RDStationForms('form-news-en-a19108fca33a153c7d2e', 'UA-225202853-1').createForm()

    }
    render(){
        return(
            <Formulario>
                    <div className="newsLetter">
                        <div role="main" id="form-news-en-a19108fca33a153c7d2e"></div> 
                    </div>
            </Formulario>
        )
    }
}

export default FormularioEN;

