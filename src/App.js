import {useEffect, useState} from 'react'
import axios from 'axios';
import TableCoins from './components/TableCoins';
import './App.css';

function App() {
  const [coins, setCoins] = useState([])

  const getData = async () => {
    //get from api url "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false" using axios
    const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    //set state with response data
    setCoins(res.data)
  }

  const [search, setSearch] = useState('')


  useEffect(() => {
    getData()
  }, [])



  return (
    <div className="container">
      <div className="row">
        <input type="text" placeholder="Search a Coin" className="form-control bg-dark text-light border-0 mt-4 text-center" value={search} onChange={(e) => setSearch(e.target.value)} />
        <div className="col-md-12">
          <TableCoins coins={coins} search={search} />
        </div>
      </div>
    </div>
  );
}

export default App;
