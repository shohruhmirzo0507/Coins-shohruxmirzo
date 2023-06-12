import React from 'react'
import Coin from './Coin'
import "./Logo.css"

function Logo() {
  return (
    <div className='logo'>
      <br />
      <div className="icon">
        <img width={250} src="https://blockchainfinancial.com/mediaserver/2019/02/admin-21181349-coingecko_logo-thumbnail.png" alt="" />
      </div>
      <br />
        <Coin/>
    </div>
  )
}

export default Logo