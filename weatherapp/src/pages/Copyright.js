import React, {Component} from 'react';
import { MdCopyright } from 'react-icons/md';

export default class Copyright extends Component {
    render () {
        return (
            <div className="copyright">
                <p> <MdCopyright className="copyrightimg"/> 2019 - By Stine Knarkegaard Petersen</p>
            </div>
        );
    }
}