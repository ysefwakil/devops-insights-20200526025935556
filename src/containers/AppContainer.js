import React, { useState } from 'react';
import fetch from 'isomorphic-unfetch'
import ZipResponse from '../components/ZipResponse';
import Zip from '../components/Zip';

function AppContainer(props) {

    const [responseData, setResponseData] = useState('');

    const handleZipChange = async (zipValue) => {
        //console.log(`--------- fetchData called zip:${zipValue}`)
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?appid=6b7b471967dd0851d0010cdecf28f829&units=metric&q=${zipValue}`)
        var lat = localStorage.getItem('lat');
        var long = localStorage.getItem('lng');

        const json = await res.json()

        setResponseData(json);
        localStorage.setItem('weather', JSON.stringify(json));

    }

    const clearResponse = () => {
        setResponseData('');
    }

    return (
        
        <div>
            
            
            <div className="row mt-4">
                <div className="col-sm-4"></div>
                <Zip onZipChange={handleZipChange} clearResponse={clearResponse}/>
                <div className="col-sm-4"></div>
            </div>

            <div className="row mt-4a">
                <div className="col-sm-2"></div>
                <ZipResponse responseData= {JSON.parse(localStorage.getItem('weather'))} clearResponse={clearResponse}/>
                <div className="col-sm-2"></div>
            </div>
        </div>
        
    );
}


export default AppContainer
