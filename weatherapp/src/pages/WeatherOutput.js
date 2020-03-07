import React, {Component} from 'react';
import { MdMyLocation } from "react-icons/md";
import { FaTemperatureHigh } from "react-icons/fa";
import { FaTemperatureLow } from "react-icons/fa";


export default class WeatherOutput extends Component {
    render() {
        return(
            <div className="weatherinfo">
                {this.props.city &&  <p> <strong>{this.props.city} , {this.props.country}</strong> <MdMyLocation className="wiconLocation"/></p>}
                {this.props.description && <p><label><strong>Description:</strong> </label> <i> {this.props.description} </i></p>}
                {this.props.temperature && <p> <label><strong>Temperature: </strong></label> <i>{this.props.temperature} </i> &#8451;</p>}
                {this.props.temp_min && <p> <label><strong>Min. Temperature: </strong></label> <i>{this.props.temp_min} </i> <FaTemperatureLow className='FaTemperatureLow' /></p>}
                {this.props.temp_max && <p> <label><strong>Max. Temperature: </strong></label> <i>{this.props.temp_max} </i> <FaTemperatureHigh className='FaTemperatureHigh'/></p>}
                {this.props.feels_like && <p> <label><strong>Temp. feels like: </strong></label> <i>{this.props.feels_like}</i> &#8451; </p>}
                {this.props.error && <p className="error"> <strong>{this.props.error} </strong></p>}
            </div>
        );
    }
}