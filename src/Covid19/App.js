import React from "react";
import Covidinfo from "./data";
import './App.css';


const Covid = () => {


    /*
    const getCovidData = async () => {
        const res = await fetch('https://api.covid19india.org/state_district_wise.json');
        const actualData = res.json;
        console.log(actualData);
    }

    useEffect(() => {
        getCovidData();
    }, []);
    */

    return(
        <>
        <h1>INDIA COVID 19 STATE-WISE DATA</h1>
        <div className="main">
            <table>
                    <tr className="head">
                        <th>Location</th>
                        <th>Confirmed</th>
                        <th>Discharged</th>
                        <th>Deaths</th>
                        <th>TotalConfirmed</th>
                    </tr>
                    {Covidinfo.map((elem) => {
                        return (
                            <tr>
                                <td>{elem.loc}</td>
                                <td>{elem.confirmedCasesIndian}</td>
                                <td>{elem.discharged}</td>
                                <td>{elem.deaths}</td>
                                <td>{elem.totalConfirmed}</td>
                            </tr>)

                        }
                    )}
            </table>
        </div>
        </>
    )
}

export default Covid;