import React from "react";
import Navbar from '../../components/navbar/navbar';
import Features from '../../components/features/features';
import Footer from '../../components/footer/footer';


export const Test:React.FC = () => {
    return(
        <div>
            <h1>this is a test page</h1>
            <Navbar />
            <Features />
            <Footer />
        </div>
    )
}

