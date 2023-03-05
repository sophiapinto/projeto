import React, { PureComponent, Fragment } from "react";
import calendario from "../../assets/images/calendario.svg";

//import { Link } from "react-router-dom";

class PrazoVacinas extends PureComponent {
    render() {
      return (
        <Fragment>

                <div className="calendario-wrapper">
                    <figure class="figure-calendario">
                        <img src={calendario} alt="Calendario"/>
                    </figure>
                </div>        
        </Fragment>
  
  
      );
    }
}

export default PrazoVacinas;