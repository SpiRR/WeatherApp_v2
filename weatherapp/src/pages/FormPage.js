import React, {Component} from 'react';

export default class Form extends Component {
    render(){
        return(
            <div className="formcontainer">
                <form className="weatherForm" onSubmit={this.props.getWeather}>
                    <input type="text" name="city" placeholder="Enter City"/>
                    <input type="text" name="country" placeholder="Enter Country"/>
                    <button>Search</button>
                </form>
            </div>
        );
    }
}