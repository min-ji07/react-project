import { useEffect, useState } from "react";
import styles from "./css/App.module.css";
// api coinpaprika

function Coin(){
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
    .then(response => response.json())
    .then((json) => {
        setCoins(json);
        setLoading(false);
    });
    }, []);
    return(
        <div>
            <h1 className={styles.title}>The Coins! {coins.length}</h1>
            {loading ? (<strong>Loading...</strong>) : 
            (<select>
               {
                coins.map((banana, index) => <option key={index}>{banana.name}
                ({banana.symbol}): {banana.quotes.USD.price}
                USD</option>)
                }
            </select>)}
        </div>
    )
}

export default Coin;