import React, { Component } from 'react';
import NavBar from './NavBar.js';
import Home from './Home.js';
import Minter from './Minter.js';
import IconSet from './IconSet.js';
import Auctioner from './Auctioner.js';
import PayRoy from './PayRoy.js';
import Analytics from './Analytics.js';
import Web3 from 'web3';
import NFTcon from '../contracts/ccc0token.json'
import AUCcon from '../contracts/auction.json'
import './App.css';

class App extends Component {

  async UNSAFE_componentWillMount() {
    await this.loadWeb3()
    this.setState({ loading: true })
    await this.loadBlockchainData()
    setInterval(() => {
      this.loadBlockchainData();
    }, 20000);
  }

  async loadWeb3(){
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.ethereum)
    }
    else {
      window.alert('Non-ethereum browser detected. Metamask install is recommended.')
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3

    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })

    const networkId = await web3.eth.net.getId() 
    let blockNumber = await web3.eth.getBlockNumber()
    this.setState({ blockNumber: blockNumber })
    let block = await web3.eth.getBlock(blockNumber)
    if(block){
      let blocktime = block['timestamp']
      this.setState({ blocktime: blocktime })}
    const NFTContractData = NFTcon.networks[networkId]
    const AUCContractData = AUCcon.networks[networkId]
    if(NFTContractData) {
      const NFTContract = new web3.eth.Contract(NFTcon.abi, NFTContractData.address)
      this.setState({ NFTContract })
      try {let NFTContractBalance = await NFTContract.methods.balanceOf(this.state.account).call()
        if(NFTContractBalance){this.setState({ NFTContractBalance: NFTContractBalance })}
        let NFTContractSupply = await NFTContract.methods.supplyMinted().call()
        if(NFTContractSupply){this.setState({ NFTContractSupply: NFTContractSupply})}
      } catch(e) { }
      if(AUCContractData) {
        const AUCContract = new web3.eth.Contract(AUCcon.abi, AUCContractData.address)
        this.setState({ AUCContract })
        try {let AuctionLive = await AUCContract.methods.auction().call()
          this.setState({ AuctionLive: AuctionLive })
          let curbid = await AUCContract.methods.amounter().call()
          if(curbid){this.setState({ curbid: curbid/1000})}
        } catch(e) { }
        
      }
      this.setState({ loading : false})
    }
    else {
      window.alert('Please switch to the Ethereum Network ')
      }

    this.setState({ loading: false })
  }

  loadWallet = () => {
    if (window.ethereum) {
    window.web3 = new Web3(window.ethereum)
    window.ethereum.enable()}
    else if (window.web3) {
    window.web3 = new Web3(window.web3.currentProvider)}
    else {
    window.alert('Non-ethereum browser detected. Metamask install is recommended.')
    }
    setInterval(() => {
      this.loadBlockchainData();
    }, 15000);}
  mint = () => {
    if(this.state.account === '0x0'){this.loadWallet(); return}
    this.setState({loading: true})
    this.state.NFTContract.methods.mint().send({ from: this.state.account }).on('transactionHash', (hash) => {
    this.setState({ loading: false })
  })}
  bid = (amount) => {
    let web3 = window.web3
    this.setState({loading: true})
    this.state.AUCContract.methods.createBid().send({ from: this.state.account, value: web3.utils.toWei(amount)  }).on('transactionHash', (hash) => {
    this.setState({ loading: false })
  })}
  settlecreate = () => {
    if(this.state.account === '0x0'){this.loadWallet();}
    this.setState({loading: true})
    this.state.AUCContract.methods.settleCurrentAndCreateNewAuction().send({ from: this.state.account }).on('transactionHash', (hash) => {
    this.setState({ loading: false })
  })}

  page = (pageselect) => {
    this.setState({ pageTier: pageselect})
  }
  section = (sectionselect) => {
    if(sectionselect === 1){sectionselect = this.state.sectionTier + 1}
    if(sectionselect === 0){sectionselect = this.state.sectionTier - 1}
    //overflows rotate
    if(sectionselect === 0){sectionselect = 3}
    if(sectionselect === 4){sectionselect = 1}
    this.setState({ sectionTier: (sectionselect)})
  }
  scroll = (target) => {
    let location = document.getElementById(target)
    location.scrollIntoView()
  }
  sendroyalty = (value) => {
    let web3 = window.web3
    let amountToSend = Web3.utils.toWei(value.toString(), "ether")
    console.log(amountToSend)
    console.log(this.state.NFTContract._address)
    //({to: (this.state.NFTContract._address), value: amountToSend })
    web3.eth.sendTransaction({ from: this.state.account, to:this.state.NFTContract._address, value: amountToSend});
  }
  

  constructor(props) {
    super(props)
    this.state = {
      account: '0x0',
      NFTContract: {},
      AUCContract: {},
      AuctionLive: [],
      AuctionIsLive: false,
      NFTContractSupply: 0,
      curbid: 0,
      percentroy: 0.15,
      pageTier: 1,
      sectionTier: 1,
      blockNumber: 0,
      blocktime: 0,
      loading: false
    }
  }
  
  render() {
    let content
    if (this.state.pageTier === 1) {
      content = <div id='home'><Home
                  section={this.section}
                  sectionTier={this.state.sectionTier}
                  />
                  <br id='mint'></br>
                  <br></br>
                  <Minter
                  mint={this.mint}
                  NFTContractSupply={this.state.NFTContractSupply}
                  />
                  <IconSet/>
                  <br id='auction'></br>
                  <br></br>
                  <Auctioner
                  settlecreate={this.settlecreate}
                  bid={this.bid}
                  AuctionLive={this.state.AuctionLive}
                  blocktime={this.state.blocktime}
                  curbid={this.state.curbid}
                  />
                  <br id='Payroy'></br>
                  <br></br>
                  <PayRoy
                  sendroyalty={this.sendroyalty}
                  />
                  <br id='analytics'></br>
                  <br></br>
                  <Analytics
                  />
                  </div>}           
    if (this.state.loading === true) {
      content = <div className="loading-icon centerit"></div>
    }  
    return (
      <div className="backgrounder">
        <NavBar 
          scroll = {this.scroll}
          account = {this.state.account}
          page={this.page}
          style={{zIndex: 99}}/>
        <div className="contentboxer">{content}</div>
      </div>
  );}}

export default App;
