import React from "react"

export function Header() {
    return (
        <header className="header">
            <img 
                src="./public/images/Troll Face.jpg" 
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )
}