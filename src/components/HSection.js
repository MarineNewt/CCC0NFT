import React, { Component } from 'react'
import arr from '../images/arrow.png'
import TM1 from '../images/Wzrd.png' //Team member 1
import TM2 from '../images/Wzrd.png' //Team member 2
import Twitter from '../images/twit.png' //Twitter icon
import Mail from '../images/mail.png' //Mail icon, www.iconpacks.net
import Website from '../images/website.png' //Website icon


class HSection extends Component {
  
  render() {
    //Project Background
   if(this.props.sectionTier === 1)return (
        <div className='section sectionwriter'>
            <div className='flexit'>
                <button onClick={(event) => {event.preventDefault();this.props.section(0)}} style={{border: 'none', backgroundColor: 'inherit', margin: 'auto'}}><img className='Sectionbutton' src={arr} alt='arrow' style={{transform: 'scaleX(-1)'}}></img></button>
                <h3> What are ccc0 NFTs?</h3>
                <button onClick={(event) => {event.preventDefault();this.props.section(1)}} style={{border: 'none', backgroundColor: 'inherit', margin: 'auto'}}><img className='Sectionbutton' src={arr} alt='arrow'></img></button>
            </div>
            <br></br>
            <div style={{marginRight: '3vw', marginLeft: '3vw'}}> 
                <p style={{marginRight: '8vw', marginLeft: '8vw'}}><b><i>ccc0 NFTs are an experimental collection exploring CC0 art, royalties, and alternate revenue streams for NFT projects.</i></b></p>
                <p>The ccc0 collection will consist of 3,333 NFTs derived from combinations of CC0 artwork from popular NFT collections of today. 
                    3000 NFTs will be available for Free FCFS in the primary offering. 333 NFTs will be reserved for after the primary offering when a series of 333 auctions will begin, 1 per day till the last NFT is minted to complete the 3,333 collection. All royalties from this collection will be split entirely amongst the 
                    collections the art is derived from, making each royalty payment a direct contribution to the CC0 NFT ecosystem and those who have helped develop it. We will monitor the collection across marketplaces to observe when and where royalties are being respected, as well as the places they are being ignored. Stats from our experiment will be made public and shared with our community as we discuss and cultivate ideas in the space regarding the future of NFT collection longevity.
                </p>
            </div>
        </div>
    );

    //Inspiration
    if(this.props.sectionTier === 2)return (
        <div className='section sectionwriter'>
            <div className='flexit'>
                <button onClick={(event) => {event.preventDefault();this.props.section(0)}} style={{border: 'none', backgroundColor: 'inherit', margin: 'auto'}}><img className='Sectionbutton' src={arr} alt='arrow' style={{transform: 'scaleX(-1)'}}></img></button>
                <h3> The Inspiration</h3>
                <button onClick={(event) => {event.preventDefault();this.props.section(1)}} style={{border: 'none', backgroundColor: 'inherit', margin: 'auto'}}><img className='Sectionbutton' src={arr} alt='arrow'></img></button>
            </div>
            <div style={{marginRight: '1vw', marginLeft: '1vw'}}> 
                <p style={{marginRight: '6vw', marginLeft: '6vw', marginBottom: '15px', marginTop: '15px'}}><b><i>A project born from Open sourced art, Discussions and debates of royalties place within NFT projects, and the Socialscape of the NFT oriented Web3 commmunity.</i></b></p>
                <p>In August 2022, NFT marketplace Sudoswap gained popularity as traders began using the platform to buy NFTs without paying creator royalties. Ostensibly to compete, marketplace X2Y2 quickly announced they too would no longer enforce creator royalties on some NFT projects. In a domino effect of responses the largest NFT marketplace, Opensea, announced their time of honoring creator royalties was coming to a dead end. Cryptotwitter became ignited with discussion questioning, <i>"How will Projects survive long term?", "Whats the point for artists to use the medium?",</i> and <i>"What options do creators and collectors have?"</i>. In the coming days the answers to these questions were discussed, debated, and argued. In the spirit of Web3 Pioneership we set out ourselves to explore the questions; Can projects create sustainable revenue outside of royalties? Are collectors themselves willing to provide royalties to projects with a good vision? We don't expect to find all of the answers, but we do hope to bring light to the future of NFT projects showcasing the ways which innovation and ingenuity will continue to flourish as we collectively grow and evolve into the next era of Web3. 
                </p>
            </div>
        </div>
    );

    //Team
    if(this.props.sectionTier === 3)return (
        <div className='section'>
            <div className='flexit'>
                <button onClick={(event) => {event.preventDefault();this.props.section(0)}} style={{border: 'none', backgroundColor: 'inherit', margin: 'auto'}}><img className='Sectionbutton' src={arr} alt='arrow' style={{transform: 'scaleX(-1)'}}></img></button>
                <h3>The ccc0 Team</h3>
                <button onClick={(event) => {event.preventDefault();this.props.section(1)}} style={{border: 'none', backgroundColor: 'inherit', margin: 'auto'}}><img className='Sectionbutton' src={arr} alt='arrow'></img></button>
            </div>
            <br></br>
            <div style={{marginRight: '3vw', marginLeft: '3vw'}}> 
                <div className='responsive-container-block'>
                    <div className='team-card'>
                        <img src={TM1} alt='team member'></img>
                        <p><b>Ryland</b></p>
                        <p>-Founder-</p>
                        <div className='icon-container'>
                            <a href='https://twitter.com/home' target="_blank" rel="noopener noreferrer"><img className='icon' src={Twitter} alt='team member'></img></a>
                            <a href='mailto: abc@example.com' target="_blank" rel="noopener noreferrer"><img className='icon' src={Mail} alt='team member'></img></a>
                            <a href='https://' target="_blank" rel="noopener noreferrer"><img className='icon' src={Website} alt='team member'></img></a>
                        </div>
                    </div>
                    <div className='team-card'>
                        <img src={TM2} alt='team member'></img>
                        <p><b>Newt9.eth</b></p>
                        <p>-Developer-</p>
                        <div className='icon-container'>
                            <a href='https://twitter.com/Newt936' target="_blank" rel="noopener noreferrer"><img className='icon' src={Twitter} alt='team member'></img></a>
                            <a href='https://portfolio-newt.netlify.app/' target="_blank" rel="noopener noreferrer"><img className='icon' src={Website} alt='team member'></img></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default HSection;