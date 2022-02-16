import React from 'react';
import Things from './Things';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

const FavoriteThings = ({ match })=> (
    <div>
        <h1>Favorite Things</h1>

        <ul>
            <li><Link to={`${match.url}/Jaguar`}>Favorite Car</Link></li>
            <li><Link to={`${match.url}/Sushi`}>Favorite Food</Link></li>
            <li><Link to={`${match.url}/Gladiator`}>Favorite Movie</Link></li>
        </ul>

        <Route path={`${match.url}/:thingsId`} component={Things}/>
        <Route exact path={match.url} render={()=>(<h3>Please pick a favorite thing</h3>)}/>
    </div>
);

export default FavoriteThings;