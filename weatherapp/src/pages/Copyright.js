import React from 'react';
import { MdCopyright } from 'react-icons/md';

class Copyright extends React.Component {
    render(){
        return(
            <div className="copyright">
                <p> <MdCopyright className="copyrightimg"/> 2019 - By Stine Knarkegaard Petersen</p>
            </div>
        );
    }
}

export default Copyright;