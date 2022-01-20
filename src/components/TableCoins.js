import React from 'react'
import CoinRow from './CoinRow'

const TableCoins = ({coins, search}) => {
    //filter coins by search
    //if search is empty, return all coins
    //if search is not empty, return coins that match search
    const filteredCoins = coins.filter(coin => {
        return coin.name.toLowerCase().includes(search.toLowerCase()) || coin.symbol.toLowerCase().includes(search.toLowerCase())
    })


    return (
        <table className="table table-dark mt-4 table-hover">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Coin</th>
                    <th>Price (USD)</th>
                    <th>Change</th>
                    <th>Market Cap</th>
                    <th>Volume</th>
                </tr>
            </thead>
            <tbody>
                {filteredCoins.map((coin, index) => (
                    <CoinRow coin={coin} index={index} key={index} />
                ))}
            </tbody>
        </table>

    )
}

export default TableCoins
