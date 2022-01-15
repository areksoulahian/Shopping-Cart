import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

export default function Header(props){
    const { countCartItems } = props; 
    return(
        <header className="row block center">
            <div>
                <a href="#/" >
                    <h1>Arek's Shopping Cart</h1>
                </a>
            </div>

            <Router>
                <main>
                    <nav>
                        <a href="#/">Home</a> <a href="#/cart">
                    Cart {''}
                    {countCartItems ? (
                        <button className="badge" >{countCartItems}</button>
                    ): ( '')
                }
            </a> <a href="#/about">About</a> 
                    </nav>
                </main>
            </Router>

            <div>
                <a href='#/signin'>Sign-in</a>
            </div>
        </header>
    );
}