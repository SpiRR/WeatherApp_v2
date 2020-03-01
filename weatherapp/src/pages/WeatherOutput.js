import React, {Component} from 'react';

export default class WeatherOutput extends Component {
    render() {
        return(
            <div className="weatherInfo">
                <h4>Weather</h4>
                {this.props.city &&  <p> {this.props.city} , {this.props.country} </p>}
                {this.props.description && <p><label>Description: </label> {this.props.description} </p>}
                {this.props.temperature && <p> <label>Temperature: </label> {this.props.temperature} </p>}
                {this.props.temp_min && <p> <label>Min. Temperature: </label> {this.props.temp_min} </p>}
                {this.props.temp_max && <p> <label>Max. Temperature: </label> {this.props.temp_max} </p>}
                {this.props.feels_like && <p> <label>Temp. feels like: </label> {this.props.feels_like} </p>}
                {this.props.error && <p className="error"> {this.props.error} </p>}
            </div>
        );
    }
}