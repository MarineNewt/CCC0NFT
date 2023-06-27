import React, { Component } from 'react'
import nft1 from './../images/NFT1.png'
import nft2 from './../images/NFT4.png'
import nft3 from './../images/NFT3.png'
import nft4 from './../images/NFT8.png'
import nft5 from './../images/NFT9.png'


class Minter extends Component {
  
  render() {
    return (
      <div className=" ">
          <div className='compbox comp-font-sizer centerit' style={{width: 'calc(60vw + 120px)'}}>
            <h1 className="title-border" style={{width: 'calc(11vw + 225px)'}}>Mint a ccc0 NFT</h1>
            <div className='cardcontainer flexit m-4 mb-5'>
              <img className='card' src={nft1} alt='icon' />
              <img className='card' src={nft2} alt='icon' />
              <img className='card' src={nft3} alt='icon' />
              <img className='card' src={nft4} alt='icon' />
              <img className='card' src={nft5} alt='icon' />
            </div>
            <button onClick={(event) => {event.preventDefault() 
              this.props.mint()}} className='inputbtn glowit'>Mint for free</button>
            <p className='mintinfo1'> Free Supply Minted: {this.props.NFTContractSupply} / 2968 </p>
            <p className='mintinfo2'> Daily auctions will begin once free mint supply is exhausted. </p>
          </div>
      </div>
    );
  }
}

export default Minter;