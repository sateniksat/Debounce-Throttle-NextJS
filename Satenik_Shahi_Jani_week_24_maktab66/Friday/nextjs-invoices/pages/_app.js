import React from 'react'
import Navbar from 'Components/Navbar';


const MyApp = ({Component, pageProps}) => {
    return (
        <div>
            <Navbar />
            <Component {...pageProps} />
        </div>
    )
}

export default MyApp;
