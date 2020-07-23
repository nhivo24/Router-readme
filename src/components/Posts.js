import React,{Component} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Posts extends Component{
constructor(){
    super();
     this.getData();
     this.state={
         posts:[]
     }
                
}
getData(){
    fetch("http://127.0.0.1:8000/api/posts")
    .then(response => {
            response.json().then((data) =>  {
                    console.log(data);
        this.updateUI(data);
            });
    });
}
    updateUI(data){
        this.setState({
            posts:data
        })
    }
render() {
    return(
        <div>
        <h1>Posts</h1>
        {this.state.posts.map(item =>
            <div>
                <h2>{item.id}</h2>
                <h2>{item.title}</h2>
                <Link to={'/posts/'+item.id}>Details</Link>
            </div>
        )}
        </div>
    )
}

}
export default Posts;