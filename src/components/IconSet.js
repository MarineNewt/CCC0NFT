import React, { Component } from 'react';
import Opensea from './../images/opensea.png';
import Twitter from './../images/twit.png';
import Blur from './../images/blur.jpeg';


class IconSet extends Component {
  render() {
    return (
        <div className='flexit' ><img className='centericonsub' src={Opensea} alt=''></img><img className='centericonsub' src={Blur} alt=''></img><img className='centericonsub' src={Twitter} alt=''></img></div>
    );
  }
}

export default IconSet;