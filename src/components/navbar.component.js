import React, {Component} from "react";
import { Link } from "react-router-dom";
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import '../App.css';


export default class Navbar extends Component{
    render(){
        return(
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to ="/" className="navbar-brand">ExerciseTracker</Link>

                <div className="collpase navbar-collapse">
                    <ul className ="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">Exercises</Link>
                        </li>

                        <li className="navbar-item">
                            <Link to="/create" className="nav-link">Create Exercise</Link>
                        </li>

                        <li className="navbar-item">
                            <Link to="/user" className="nav-link">Create User</Link>
                        </li>

                    </ul>
                </div>
            </nav>


    

  
        );
    }
}