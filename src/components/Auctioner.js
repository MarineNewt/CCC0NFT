import React, { Component } from 'react'
import nft1 from './../images/NFT1.png'


class Auctioner extends Component {
  render() {
    if(!this.props.blocktime){return(<div className="loading-icon centerit"></div>)}
    return (
      <div className="container-fluid">
          <div className='compbox centerit aucfont' style={{width: 'calc(65vw + 70px)'}}>
            <a href='/' className="help-icon"><svg style={{position: 'absolute', right: '16vw'}} width='calc(1vw + 20px)' height='calc(1vw + 20px)' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM256 336c-18 0-32 14-32 32s13.1 32 32 32c17.1 0 32-14 32-32S273.1 336 256 336zM289.1 128h-51.1C199 128 168 159 168 198c0 13 11 24 24 24s24-11 24-24C216 186 225.1 176 237.1 176h51.1C301.1 176 312 186 312 198c0 8-4 14.1-11 18.1L244 251C236 256 232 264 232 272V288c0 13 11 24 24 24S280 301 280 288V286l45.1-28c21-13 34-36 34-60C360 159 329 128 289.1 128z"/></svg>
              <div className="help-text">
                <p>-Auction Time: 24 Hours, Bids in the last 30 minutes will extend the auction by 30 minutes.</p>
                <p>-Minimum bid is 0.01 ETH, bid increments must be at least 5% greater than the highest bid.</p>
                <p>-Beginning the next auction also settles the last auction, distributing the NFT to the winner.</p>
              </div>
            </a> 
            <h1 className="title-border" style={{width: 'calc(8.5vw + 165px)'}}>Auctions</h1>
            <div className="flexit mt-4">
              <div style={{marginRight: 'calc(5vw)', paddingRight: '4vw',borderRight: '3px solid #333'}}>
                {/*If Auction is Active*/}                
                {(!this.props.AuctionLive[5] && (this.props.blocktime < this.props.AuctionLive[3])) && <div><b><h2>Auction {this.props.AuctionLive[0]} is Live. </h2></b>
                <br></br>
                <h3>Current Bid: {this.props.curbid} Eth</h3>
                <br></br>
                <h3>Time remaining:</h3>
                <h3>{Math.floor((this.props.AuctionLive[3] - this.props.blocktime)/3600)} Hours, {Math.floor((this.props.AuctionLive[3] - this.props.blocktime)/60)%60} Minutes</h3></div>}
                {/*If Auction is Closed*/}  
                {((this.props.AuctionLive[5]) || (this.props.blocktime > this.props.AuctionLive[3])) && <div><h2>Auction {this.props.AuctionLive[0]} has Ended. </h2>
                <br></br><br></br>
                <h3>Winning bid: {this.props.curbid} Eth</h3></div>}
                
              </div>
              <div style={{marginTop: 'auto', marginBottom: 'auto'}} >
                <img className='shimit' src={nft1} alt='icon' />
                {this.props.AuctionLive[4] && <p className='mt-3'>High Bidder: {this.props.AuctionLive[4].substring(0, 10)}...</p>}
              </div>
            </div>
            {/*If Auction is Active*/}  
            {(!this.props.AuctionLive[5] && (this.props.blocktime < this.props.AuctionLive[3])) && <div className=""><form className="mt-4 mb-2 centerinput input-group" onSubmit={(event) => {
            event.preventDefault()
            let amount
            amount = this.input.value.toString()
            this.props.bid(amount)}}><input
                type="text"
                ref={(input) =>  { this.input = input }}
                className="form-control form-control-lg"
                placeholder="0.01 (ETH)"
                required/><button type="submit" className='inputbtn input-group-append glowit '>Bid</button></form></div>}
            {/*If Auction is Closed*/}  
            {(this.props.blocktime > this.props.AuctionLive[3]) && <button onClick={(event) => {event.preventDefault() 
              this.props.settlecreate()}} className='inputbtn glowit mt-5' style={{width: 'calc(13vw + 80px)'}}>Begin New Auction</button>}
          </div>
      </div>
    );
  }
}

export default Auctioner;