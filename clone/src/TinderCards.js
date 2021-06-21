import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';

function TinderCards() {

    const [people, setPeople] = useState([
        {
            name: "Naruto",
            url: "https://i.pinimg.com/564x/ed/7f/36/ed7f3659a5cb689e234f98517e4a1ca8.jpg",
        },
        {
            name: "Kakashi",
            url: "https://cdn141.picsart.com/346192612051201.jpg",
        },
        {
            name: "Sukuna",
            url: "https://i.pinimg.com/474x/3f/71/59/3f7159db35d2989e231b161adf5635b9.jpg",
        },

    ]);

    const swiped = (direction, nameToDelete) => {
        console.log("Removing: " + nameToDelete);

    };
    const outOfFrame = (name) => {
        console.log(name + " left the screen");

    };
    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                {people.map((person) => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                    >

                        <div style={{ backgroundImage: "url(" + person.url + ")" }} className="card">

                            <h3>{person.name}</h3>

                        </div>
                    </TinderCard>
                ))}



            </div>


        </div>
    )
}

export default TinderCards;
