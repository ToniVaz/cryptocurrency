import React from 'react';

export default function Tape({coins}){
    const {data} = coins;
    return(
        <div className='tape'>
            <ul>
            {data?.map(data=>{
                return(
                    <li>
                        <img style={{width: '25px',height: '25px' }} alt='img' src={data.image}/>
                        <h2>{data.symbol}</h2>
                    </li>
                )
            })}

            </ul>
        </div>
    )
}