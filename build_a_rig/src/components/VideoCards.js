import React, { Component } from 'react'
import axios from 'axios';

//let videoCards = "http://localhost:8080/videocards";
class VideoCards extends Component {
    constructor (props) {
        super(props)

        this.state = {
            info: [],
            videocards: "https://nameless-falls-65963.herokuapp.com/videocards"
        }

    }


   async componentDidMount() {
        console.log("The api has been grabbed")
        axios.get(this.state.videocards)
        .then(response => {
            this.setState({info: response.data});
        })

        .catch(error => {console.log(error)})
    }

    // collectItems = () =>{
    //     // event.preventDefault()
        
    //     console.log("The api has been grabbed")
    //     axios.get(this.state.cases)
    //     .then(response => {
    //         this.setState({info: response.data.results});
    //     })

    //     .catch(error => {console.log(error)})
    // };

    

    render() {
        
       
        return (
            
            <div className="Main">
                <h1>VIDEO CARDS</h1>
                {
                    this.state.info.map(vidList => {
                        return (
                            <div className="itemDisplay">
                                
                                <div className="details">
                                    <input id="cases" type="checkbox" value={vidList} onChange={this.onSearchChange}/>
                                    <img src={vidList.imageurl}/>
                                    <h3 className="itemTitle"> {vidList.name}</h3>
                                    <h4 className="size">Size: {vidList.size} </h4>
                                    <h4 className="size">Memoey GBs: {vidList.memoryGB} </h4>
                                    <h3 className="cost"> Cost: $ {vidList.cost} </h3>
                                </div>

                            </div>
                            )
                        })
                    }
            </div>
        )
    }
}

export default VideoCards