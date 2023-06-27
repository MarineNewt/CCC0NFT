import React, { Component } from 'react';
import HSection from './HSection';
import Center from './../images/centerlogo.png';


class Home extends Component {
  render() {
    return (
        <div className="" >
              <img className='centerlogo ' src={Center} alt='centerlogo'></img>
              <br></br>
            <div className='compbox centerit' style={{width: 'calc(70vw + 100px)',}}>
            <br></br>
            <HSection
                    section={this.props.section}
                    sectionTier={this.props.sectionTier}/>
          </div>
        </div>
    );
  }
}

export default Home;