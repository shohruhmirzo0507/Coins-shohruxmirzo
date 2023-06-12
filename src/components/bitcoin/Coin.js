import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Coin() {

  const [coins, setCoins] = useState([])

  useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false&locale=en")
      .then(res => {
        setCoins(res.data)
        console.log(res.data);
      })
      .catch(error => console.error("Error"))
  }, [])


  return (
    <div>
      <table>
        <tr>
          <th>Crypto Name</th>
          <th>Current price</th>
          <th>Market cap change</th>
          <th>Market cap rank</th>
        </tr>
        {coins.map((item) => {
          return (
            <tr key={item.id}>
              <td>
                <img className='cryptoImg' src={item.image} alt="" />
                {item.name}
              </td>
              <td>$ { item.current_price }</td>
              {item.market_cap_change_percentage_24h < 0 ? (
                <td className='red'>{item.market_cap_change_percentage_24h.toFixed(2)}%</td>
              )
                :
                (
                  <td className='green'>{item.market_cap_change_percentage_24h.toFixed(2)}%</td>
                )
              }
              <td>{item.market_cap_rank} </td>
            </tr>
          )
        })}
      </table>

    </div>
  )
}

export default Coin