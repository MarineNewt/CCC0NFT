import React, { Component } from 'react'


class Analytics extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className='compbox centerit' style={{width: 'calc(68vw + 100px)'}}>
          <h1 className="title-border" style={{width: 'calc(8.5vw + 165px)'}}>Analytics</h1>
          <br></br>
          <div className='flexitw'>
            <iframe src="https://dune.com/embeds/1749062/2882938/5c6a8921-d549-4a10-9413-0b0fc15b17e9" height="300px" width="400px" className='iframebox' title="Chart 1"></iframe>
            <iframe src="https://dune.com/embeds/1451417/2816123/07d8bf50-2604-4943-9f27-88a8a3b84ece" height="300px" width="400px" className='iframebox' title="Chart 2"></iframe>
          </div>
          <div className='flexitw mb-5'>
            <iframe src="https://dune.com/embeds/1709793/2822735/3ccf3e60-11dd-4ef9-86f4-b2461ffc7e14" height="300px" width="400px" className='iframebox' title="Chart 3"></iframe>
            <iframe src="https://dune.com/embeds/959016/1666180/ca115d9b-b33d-4e00-b9a5-531c0e3c3189" height="300px" width="400px" className='iframebox' title="Chart 4"></iframe>
          </div>
        </div>
        <br></br>
      </div>
    );
  }
}

export default Analytics;