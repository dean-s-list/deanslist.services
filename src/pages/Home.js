import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ReactSvgWorldmap from "react-svg-worldmap";
// import data from '../assets/data.json'

const Home = () => {
    // const data = [
    //     { country: "cn", value: 1389618778 }, // china
    //     { country: "in", value: 1311559204 }, // india
    //     { country: "us", value: 331883986 }, // united states
    //     { country: "id", value: 264935824 }, // indonesia
    //     { country: "pk", value: 210797836 }, // pakistan
    //     { country: "br", value: 210301591 }, // brazil
    //     { country: "ng", value: 208679114 }, // nigeria
    //     { country: "bd", value: 161062905 }, // bangladesh
    //     { country: "ru", value: 141944641 }, // russia
    //     { country: "mx", value: 127318112 }, // mexico
    // ];

    const data = [
        {
            country: "gr",
            value: 22141.279622642
        },
        {
            country: "ng",
            value: 16781.190029638
        },
        {
            country: "pk",
            value: 6649.403490566
        },
        {
            country: "ca",
            value: 5196.1396226415
        },
        {
            country: "us",
            value: 2707.43
        },
        {
            country: "fr",
            value: 1878.9483185841
        },
        {
            country: "pt",
            value: 1593.9
        },
        {
            country: "br",
            value: 1488.56
        },
        {
            country: "jp",
            value: 1375
        },
        {
            country: "be",
            value: 861.9
        },
        {
            country: "au",
            value: 735.46
        },
        {
            country: "in",
            value: 566.14
        },
        {
            country: "gb",
            value: 343.69
        },
        {
            country: "es",
            value: 181.16
        },
        {
            country: "id",
            value: 100
        },
        {
            country: "sl",
            value: 84
        },
        {
            country: "de",
            value: 50
        },
        {
            country: "vn",
            value: 47.1
        },
        {
            country: "ar",
            value: 32.14
        },
        {
            country: "ph",
            value: 28.04
        },
        {
            country: "rs",
            value: 24.12
        },
        {
            country: "gt",
            value: 21.72
        }
    ]

    const minValue = Math.min(...data.map(item => item.value));
    const maxValue = Math.max(...data.map(item => item.value));

    const customStyles = {
        colorLow: 'white',
        colorHigh: '#1F1A2F',
        colorMedium: (value) => {
            if (value === undefined || isNaN(value)) {
                return 'white'; // Set the color for countries not in the data list
            }
            const percentage = (value - minValue) / (maxValue - minValue);
            const r = Math.floor(31 + (146 - 31) * percentage);
            const g = Math.floor(26 + (90 - 26) * percentage);
            const b = Math.floor(47 + (207 - 47) * percentage);
            return `rgb(${r},${g},${b})`;
        },
    };

    const getStyle = ({
        countryValue,
        countryCode,
        minValue,
        maxValue,
        color,
    }: CountryContext) => ({
        // fill: countryCode === "US" ? "blue" : color,
        fill: "#D6C6FF",
        fillOpacity: countryValue
            ? 1 + (1.5 * (countryValue - minValue)) / (maxValue - minValue)
            : 0.3,
        // stroke: "green",
        strokeWidth: 1,
        strokeOpacity: 0.2,
        cursor: "pointer",
    });

    return (
        <div className='home-page px-5'>
            {/* <img src={map} alt='map' /> */}
            {/* <ReactSvgWorldmap
                size="responsive"
                value-suffix="people"
                // size="lg"
                data={data}
                styleFunction={getStyle}
            /> */}
            <div style={{ textAlign: "center" }}>
                <iframe
                    className='iframe-map'
                    style={{ width: '100%', overflow: 'hidden' }}
                    src="https://lookerstudio.google.com/embed/reporting/6607ecd0-33e5-4df0-b44b-6df9feb65682/page/pFjXD" frameborder="0"
                    // style="border:0"
                    allowfullscreen
                ></iframe>
                {/* <iframe width="600" height="450" src="https://lookerstudio.google.com/embed/reporting/6607ecd0-33e5-4df0-b44b-6df9feb65682/page/pFjXD" frameborder="0" style="border:0" allowfullscreen></iframe> */}
            </div>
            <div className='text-center'>
                <p className='heading-text'>A Network State Of Web3 Powerusers</p>
                <div className='mb-3'>
                    <Link to='/join-us'>
                        <button className='primary-button'>
                            JOIN US
                        </button>
                    </Link>
                </div>
                <div className='mb-3'>
                    <Link to='/hire-us'>
                        <button className='primary-button'>
                            HIRE US
                        </button>
                    </Link>
                </div>
                <div>
                    <Link to='/partner-with-us'>
                        <button className='primary-button'>
                            PARTNER WITH US
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home