import React,{Component} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Home extends Component{

    render(){
        return(
            <div>
            <Link to="/About">About</Link>
            <Link to="/posts">Posts</Link>
            </div>
        );
    }
}
export default Home;