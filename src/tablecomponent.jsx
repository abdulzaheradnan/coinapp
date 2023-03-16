import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';


export default function BasicTable(props) {
    const url = 'https://api.coincap.io/v2/assets'
    const fetchdata = async (url) => {

        const res = await fetch(url)

        const data = await res.json()
        setrows(data.data)
        console.log(data.data)

    }


    useEffect(() => {
        fetchdata(url)

    }, []);

    const [rows, setrows] = useState([])



    function nFormatter(num) {
        if (num >= 1000000000) {
            return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'b';
        }
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
        }
        if (num >= 1000) {
            return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
        }
        return num;
    }
    function lformatter(num2) {
        if (num2 >= 1000000000) {
            return (num2 / 1000000000).toFixed(1).replace(/\.0$/, '') + 'b';
        }
        if (num2 >= 1000000) {
            return (num2 / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
        }
        if (num2 >= 1000) {
            return (num2 / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
        }
        return num2;
    }


    return (
        <div>
            <div className='hiiden2'>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Rank</TableCell>
                            <TableCell >name</TableCell>&nbsp;&nbsp;
                            <TableCell align="right">price</TableCell>
                            <TableCell align="right">market cap</TableCell>
                            <TableCell align="right">VWAP&nbsp;(24Hr)</TableCell>
                            <TableCell align="right">supply</TableCell>
                            <TableCell align="right">Volume&nbsp;(24Hr)</TableCell>
                            <TableCell align="right">change&nbsp;(24Hr)</TableCell>


                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.slice(0, props.page).map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">{row.rank}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    <div className='flexitem'>

                                   <span> <img src="https://assets.coincap.io/assets/icons/eth@2x.png" alt="" className='eth' /></span>
                                   <div>

                                   <div>{row.name}</div>
                                   <div>{row.symbol}</div>
                                   </div>
                                    </div>
                                </TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right">${Math.floor(row.priceUsd)}</TableCell>

                                <TableCell align="right">${nFormatter(row.marketCapUsd)}</TableCell>
                                <TableCell align="right">${lformatter(row.vwap24Hr)}</TableCell>
                                <TableCell align="right">${lformatter(row.supply)}</TableCell>
                                <TableCell align="right">${lformatter(row.volumeUsd24Hr)}</TableCell>
                                <TableCell align="right">${Math.floor(row.changePercent24Hr)}%</TableCell>




                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </div>
            <div className='hiddencon'>

            <table>
  <tr>
    <th style={{width:50}}>Name</th>
    <th>Price</th>
    <th>(24Hr)</th>
  </tr>
  {rows.slice(0,props.page).map((row)=>{
    return(
        <tr>
        <td>{row.name}</td>
        <td><i class="">{Math.floor(row.priceUsd)}</i></td>
        <td><i class="fa fa-check">{Math.floor(row.changePercent24Hr)}</i></td>
      </tr>
    )
  })}
 
 
  
  
  
</table>
            </div>
           


        </div>
    );
}
