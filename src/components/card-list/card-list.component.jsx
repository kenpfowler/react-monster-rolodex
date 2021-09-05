import React from "react";
import { Card } from "../card/card.component";
import './card-list.styles.css'

// props is any data that is passed to a component
export const CardList = props =>
{
    // we can see what props are by logging them. Props are any data passed to our component.
    // console.log(props.name)
    // the className attribute comes form the CSS file we imported
    // props.children allows displays whatever is in between our components tags
    // take a look at the App.js file to see that we've passed our <h1> tag with monster data in between our components tags
    // return <div className="card-list">{ props.children } </div>

    return <div className="card-list">
        {
            props.monsters.map(monster => {
                return <Card key={monster.id} monster={monster}/>})
        }
           </div>
}