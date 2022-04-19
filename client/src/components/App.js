import { Component } from "react";
// import {Router,Rout} from 'react-router';
import { BrowserRouter, Route } from "react-router-dom";
// import  ProfilePic  from "./Profile-pic.js";
// import Logo  from "./Logo.js";
import  Uploader  from "./Uploader.js";
import Profile from "./Profile";
import Navbar from "./navbar.js";
import FindFriends from "./findFriends.js";
import OtherProfile from './OtherProfile.js';
// import BioEditor from './bioeditor';

class App extends Component {
    constructor() {
        super();

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            profilePic: "",
            bio: "",
            userId: null,
            uploaderVisible: false,
        };

        // If you don't bind your methods, make sure you use arrow functions 
        // when passing them over to other components to preserve your context
        this.updateProfilePic  = this.updateProfilePic.bind(this);
        this.toggleUploader  = this.toggleUploader.bind(this);
        this.setBio = this.setBio.bind(this);
        // this.updateProfilePic = this.updateProfilePic.bind(this);
    }

    componentDidMount() {
        fetch("/user/data.json")
            .then((res) => res.json())
            .then((Data) => {
                this.setState({
                    profilePic: Data.profilePic,
                    first: Data.fist,
                    last: Data.last,
                    bio: Data.bio,
                    
                });
            }).catch(err => console.log("error getting user info:", err));
    }

    toggleUploader() {
        this.setState({ uploaderVisible: !this.state.uploaderVisible });
    }
    updateProfilePic(newProfilePicUrl) {
        this.setState({ profilePic: newProfilePicUrl});
        // ...
    }
    setBio(newBio) {
        this.setState({ bio: newBio });
    }

    // You could make a toggleUploader method that handles both hiding
    // and showing

    // updateProfilePic(newProfilePicUrl) {
    //     // ...
    // }

    render() {
        return (
            
               
            <BrowserRouter>
                <Navbar />
                    
                <Route exact path="/findFriends">
                    <FindFriends />
                </Route>
                <Route exact path="/user/:otherUserId">
                    <OtherProfile />
                </Route>


                    
                <Route exact path="/">
                    <Profile
                        first={this.state.first}
                        last={this.state.last}
                        url={this.state.profilePic}
                        bio={this.state.bio}
                        userId={this.state.userId}
                        toggleUploader={this.toggleUploader}
                        setBio={this.setBio}
                    />
                </Route>
                {this.state.uploaderVisible && (
                    <Uploader
                        toggleUploader={this.toggleUploader}
                        updateProfilePic={this.updateProfilePic}
                    />
                )}
                
                {/* <Route path="/user/:otherUserId">
                    <OtherProfile />
                </Route>
                 */}
            

            </BrowserRouter>
        
        );
    }  
}

export default App;