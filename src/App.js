import React from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data"
import "./App.css"

export default function App() {
    const trips = data.map(item => 
        <Card 
            key={item.id}
            item={item}
        />
    )
    return (
        <div className="container">
            <Navbar />
            {trips}
        </div>
    )
}