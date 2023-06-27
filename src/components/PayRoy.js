import React, { Component } from 'react'


class PayRoy extends Component {
  render() { 
    return (
      <div className="flexit centerit" style={{width: 'calc(70vw + 100px)', padding: "0"}}>
          <div className='compbox comp-font-sizer centerit' style={{width: '49%', marginRight: "5px"}}>
            <form onSubmit={(event) => {
            event.preventDefault()
            let amount
            let percent
            amount = this.inputamount.value.toString()
            percent = this.inputperc.value.toString()/100
            let total = amount * percent
            this.props.sendroyalty(total)}}>
              <p><i>~Pay a royalty~</i></p>
              <div className='flexit' style={{flexWrap: "wrap"}}>
                <p style={{width: "fit-content", margin: "0", }}>Sale Amount:</p> 
                <div className='flexit'>
                  <input type="number" step="0.01" ref={(input) =>  { this.inputamount = input }} style={{height: "calc(1vw + 20px)", width: "25%", marginInline: "10px" }} ></input>
                  <p>Eth.</p>
                </div>
              </div>
              <input type="range" ref={(input) =>  { this.inputperc = input }} name="temp" min="5" max="45" step="5" defaultValue="15" list="datalab" style={{width: "50%"}}/>
                <datalist id="datalab" style={{width: "50%", margin: 'auto'}}>
                  <option value="5" label="-5%"/>
                  <option value="15" label="-15%"/>
                  <option value="25" label="-25%"/>
                  <option value="25" label="-35%"/>
                  <option value="45" label="-45%"/>
                </datalist>
              <br></br>
              <button className='inputbtn glowit'>Send royalty</button>
            </form>
          </div>
          <div className='compbox comp-font-sizer centerit' style={{width: '49%', marginLeft: "5px"}}>
            <p><i>~Funds raised for ccc0 communities~</i></p>
          </div>
      </div>
    );
  }
}

export default PayRoy;