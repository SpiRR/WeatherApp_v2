import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Form from './pages/FormPage';
import About from './pages/AboutPage';
import Copyright from './pages/Copyright';
import WeatherOutput from './pages/WeatherOutput';
import './pages/style.css';
import './pages/data/data.json';

// To use: Get own API from openweathermap.org and save in dir. below!
const key = require( './pages/data/data.json' );
const api_key = key.api_key;

export default class App extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      city: undefined,
      country: undefined,
      description: undefined,
      temperature: undefined,
      temp_min: undefined,
      temp_max: undefined,
      feels_like: undefined
    }
  }

  getWeather = async ( event ) => {
    event.preventDefault();

    const city = event.target.elements.city.value;
    const country = event.target.elements.country.value;
    const api_call = await fetch( `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${api_key}&units=metric` );

    //Converting data into JSON from API
    const api_data = await api_call.json();

    if( city && country ){
      this.setState({
        city: api_data.name,
        country: api_data.sys.country,
        description: api_data.weather[0].description,
        temperature: api_data.main.temp,
        temp_min: api_data.main.temp_min, 
        temp_max: api_data.main.temp_max,
        feels_like: api_data.main.feels_like,
        error: undefined 
      });
      
    } else { 
      this.setState({
        error: 'Enter city and country'
      });
    }

  }

  render () {
    return (
      <div>  
        <Router>  
          <nav className="navbar">
            <button>
              <Link to={ '/' }>Home</Link>
            </button>
            <button>
                <Link to={ '/about' }>About</Link>
            </button>
          </nav>

          <Switch>
              <Route path="/about">
                <div className="bg-img"></div>
                <About />
              </Route>

              <Route path="/"> 
                <div className="bg-img"></div>        
                          <Form getWeather={ this.getWeather } />
                          <WeatherOutput
                            city =        { this.state.city }
                            country =     { this.state.country }
                            description = { this.state.description }
                            temperature = { this.state.temperature }
                            temp_min =    { this.state.temp_min }
                            temp_max =    { this.state.temp_max }
                            feels_like =  { this.state.feels_like }
                            error =       { this.state.error }
                            />
              </Route>
          </Switch>
        </Router>

        <Copyright />
      </div>
    );
  }
}