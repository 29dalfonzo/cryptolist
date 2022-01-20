import React from "react";

const CoinRow = ({coin, index}) => {
    const formaterUsd = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    });
    //format number with comma
    const formaterNumber = new Intl.NumberFormat('en-US', {
        style: 'decimal',
        minimumFractionDigits: 0
    });

    return (
        <tr key={index}>
            <td>{index + 1}</td>
            <td>
                <img src={coin.image} alt={coin.name} style={{width: "10%"}} className="img-fluid me-4" />
                <span>{coin.name}</span>
                <span className="ms-3 text-muted text-uppercase">{coin.symbol}</span>
            </td>
            <td>{formaterUsd.format(coin.current_price)}</td>
            <td className={coin.price_change_percentage_24h > 0 ? "text-success" : "text-danger"}>
                {coin.price_change_percentage_24h.toFixed(2)}
            </td>
            <td>{formaterNumber.format(coin.market_cap)}</td>
            <td>{formaterNumber.format(coin.total_volume)}</td>
        </tr>
    );
};

export default CoinRow;
