import React, { useEffect, useState } from 'react';
import "./stl.css";


const StateCovidTracker= () =>{

   const [data,setData]=useState([]);

    const getCovidDetail= async() =>{
        const res = await fetch("https://data.covid19india.org/data.json");
        const actualData=await(res.json());   // use without brackets also...
        // console.log(actualData.statewise);
           setData(actualData.statewise);
    }
 
    useEffect(()=>{
        getCovidDetail();
    },[]);

    return(<>
          
           <div className="container-fluid mt-4">
               <div className="main-heading">
                  <h1 className="mb-5 text-center"><span><i>INDIA</i></span> COVID-19 Dashboard</h1>
               </div>
               </div>
           <div className="table-responsive container">
               <table className="table table-hover table-center">
                   <thead className="table-dark">
                       <tr>
                           <th>State</th>
                           <th>Confirmed</th>
                           <th>Recovered</th>
                           <th>Deaths</th>
                           <th>Active</th>
                           <th>Updated</th>
                       </tr>
                   </thead>
                   <tbody>
                       {
                           data.map((val,index)=>{
                            if(val.state === "Total")
                            {
                                return (
                                <tr key={index} className="table-info">
                                     <th>{val.state}</th>
                                    <td>{val.confirmed}</td>
                                    <td>{val.recovered}</td>
                                    <td>{val.deaths}</td>
                                    <td>{val.active}</td>
                                    <td>{val.lastupdatedtime}</td>
                                </tr>
                                );
                            }
                            else{
                                return (
                                <tr key={index}>
                                    <th>{val.state}</th>
                                    <td>{val.confirmed}</td>
                                    <td>{val.recovered}</td>
                                    <td>{val.deaths}</td>
                                    <td>{val.active}</td>
                                    <td>{val.lastupdatedtime}</td>
                                </tr> 
                                );
                            }
                           })
                       }
                   </tbody>
               </table>
           </div>
          
    </>);
}

export default StateCovidTracker;