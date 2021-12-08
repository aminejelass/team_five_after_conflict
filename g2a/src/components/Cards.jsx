import React from "react";
import "./Cards.css";
import CardItem from "./CardItem.jsx";

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these EPIC GAMES!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="images/lol.jpg"
                            text="League Of Legends "
                            label="RPG"
                            path="/services"
                        />
                        <CardItem
                            src="images/fortnite.jpg"
                            text="       Fortnite           "
                            label="Shooter"
                            path="/services"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src="images/battlefield.jpeg"
                            text="               BattleField        "
                            label="Shooter"
                            path="/services"
                        />
                        <CardItem
                            src="images/Valorant.jpg"
                            text="               Valorant   ssssssssssssssssssssss    "
                            label="Adventure"
                            path="/products"
                        />
                        <CardItem
                            src="images/pubg.png"
                            text="PUBG player uknown battlegrounds"
                            label="Survival shooter"
                            path="/sign-up"
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
