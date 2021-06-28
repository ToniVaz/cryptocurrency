import React from 'react';
import './style.css';
import '../components/icomoon/style.css';
import { formatMoney } from '../utils/formatMoney';

export default function CustomizedTables({ coins }) {
  const { data } = coins;

  return (
    <div className="table-box">
      <table cellpadding="0" cellspacing="0">
        <thead>
          <tr>
            <th className="name">name</th>
            <th className="price">price</th>
            <th className='media'>24hs %</th>
            <th className='media'>total volume</th>
            <th className='media'>market cap</th>

          </tr>
        </thead>
        <tbody>
          {data?.map((i) => {
            return (
              <tr>
                <td className="first-data">
                  <img src={i.image}></img>
                  <h2>{i.name}</h2>
                  <p className="coin-symbol">{i.symbol}</p>
                </td>
                <td>{formatMoney(i.current_price)}</td>
               {i.price_change_percentage_24h < 0 ? (
                  <td className='red'>{i.price_change_percentage_24h.toFixed(2)}%</td>
               ): (
                <td className='green'>{i.price_change_percentage_24h.toFixed(2)}%</td>
               )}
                <td className='media'>{formatMoney(i.total_volume)}</td>
               
            <td className='media'>{formatMoney(i.market_cap)}</td>

              </tr>
            );

          })}
          
        </tbody>
      </table>
    </div>
    
  );
}
