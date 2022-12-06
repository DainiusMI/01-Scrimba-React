import React from "react";
import CardMain from "./components/DigitalCard/CardMain";
import Footer from "./components/DigitalCard/Footer";
import "./digital-card.css"

export default function DigitalCard() {
    return (
        <div className="digital-card">
            <CardMain />
            <Footer />
        </div>
    )
}