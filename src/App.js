import './App.css';
import BasicTable from "./tablecomponent"
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { Button } from '@mui/material';

function App() {




const [error,seterror]=useState(false)
const [page,setpage]=useState(40)




  
  return (
    <div>
      <div className='search'>
        <div className='search3'>

        <div>coins</div>
        <div>Exchange</div>
        <div>Swap</div>
        </div>
        <div className='search4'>

        <div><img src="https://play-lh.googleusercontent.com/KA6ojZ7PW4R7_5V46d2Q0KKh1AebENk56IPk46uhOBxSECHgOlnlV24k1WCubwZUxmM" alt="" className='imagecon' /></div>
        </div>

        <div className='search3'>

        <div><span><input type="text" placeholder='USD' className='input'/></span>&nbsp;<select name="" id="" className='drop'>usd
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>


            </select></div>
        <div><span><input type="text" placeholder='Eng' className='input'/></span>&nbsp;<select name="" id="" className='drop'>usd
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>


            </select></div>
            {error===false? "":

            <span><input type="text" /></span>}
        <div><SearchIcon onClick={()=>{seterror(true)}}></SearchIcon></div>
            
        <div><SettingsIcon fontSize='medium'></SettingsIcon></div>

        </div>


      </div>
    <div className='header'>
      <div className='header2'>

    <div class="hed">
      <div>Market cap</div>
      <div>$1.28t</div>

    </div>
    <div className="hed">
    <div>Exchange vol</div>
      <div>$92.9B</div>
    </div>
    <div className="hed">
    <div>Assets</div>
      <div>2295</div>
    </div>
    <div className="hed">
    <div>Exchange</div>
      <div>73</div>
    </div>
    <div className="hed">
    <div>Markets</div>
      <div>12563</div>
    </div>

    <div className="hed">
    <div>BTC COM Index</div>
      <div>39.1%</div>
    </div>
      </div>

    <div className='tablecontainmain'>
<div className='tablecon'>

    <BasicTable page={page} setpage={setpage}></BasicTable>
    <Button variant="contained" color="success" onClick={()=>{setpage(page+20)}} >
  load more
</Button>
</div>
    </div>
    </div>
    </div>
  );
}

export default App;
