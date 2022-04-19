import { Component } from "react";
// import Profile from "./Profile";


class Navbar extends Component {
  
    render() {
        return (
            <div className="navbar">
                <img className="image" src='jp1.png'   />
                <hr className="hr" />
                {/* <Profile
                    first={this.state.first}
                    last={this.state.last}
                    url={this.state.profilePic}
                    bio={this.state.bio}
                    userId={this.state.userId}
                    toggleUploader={this.toggleUploader}
                    setBio={this.setBio}
                /> */}
            </div>
        );
    }
}


export  default Navbar ;  

