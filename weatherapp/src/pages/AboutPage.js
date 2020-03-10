import React, {Component} from 'react';

export default class About extends Component {
    render () {
        return (
            <div className="aboutcontainer">
                <div className="api">
                    <h4>For more info about the API:</h4>
                    <h5>visit <a href='https://openweathermap.org/current' target='_blank' rel="noopener noreferrer">OpenWeatherMap.org</a> for the API's docmentation</h5>
                </div>

                <div className="git">
                    <h4>Visit Github</h4>
                    <h5>to share the <a href='https://github.com/SpiRR/WeatherApp_v2' target='_blank' rel="noopener noreferrer">repository</a> of the project!</h5>
                </div>
            </div>
        );
    }
}