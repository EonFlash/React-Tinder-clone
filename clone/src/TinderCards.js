import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import './TinderCards.css';

function TinderCards() {

    const [people, setPeople] = useState([



        {
            name: "Itachi",
            url: "https://i0.wp.com/rankanime.com/wp-content/uploads/2020/07/itachi7.jpg?fit=1024%2C640&ssl=1",
        },

        {
            name: "Bakugo",
            url: "https://i.pinimg.com/originals/d7/fb/37/d7fb37c2cd9cf33d39439af73463f695.png",
        },


        {
            name: "Sukuna",
            url: "https://i.pinimg.com/474x/3f/71/59/3f7159db35d2989e231b161adf5635b9.jpg",
        },

        {
            name: "Mitsuha",
            url: "https://i.pinimg.com/originals/51/22/40/512240630643df5ae0a4e2d240974c9f.png",
        },

        {
            name: "Taki",
            url: "https://64.media.tumblr.com/a16d7fb35db2e061306e20fecf596f0e/tumblr_p1r39zxYmo1wfjbpvo1_1280.png",
        },

        {
            name: "Nakiri",
            url: "https://i.ytimg.com/vi/N__COfBvuaM/maxresdefault.jpg",
        },

        {
            name: "Kakashi",
            url: "https://cdn141.picsart.com/346192612051201.jpg",
        },
        {
            name: "Nobara",
            url: "https://s1.econotimes.com/assets/uploads/20201016ac08736315dd09ecb_th_1024x0.jpg",
        },
        {
            name: "Gojo",
            url: "https://i.ytimg.com/vi/dhQRxC023QA/maxresdefault.jpg",
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
