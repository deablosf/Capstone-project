import React, { Component } from 'react'
import axios from 'axios';

//let videoCards = "http://localhost:8080/videocards";
class VideoCards extends Component {
    constructor (props) {
        super(props)

        this.state = {
            info: [],
            videocards: "https://nameless-falls-65963.herokuapp.com/videocards",
            selection: '',
            selectedCase: '',
            bob: ''
        }

    }

    onPick = (event) => {
        this.setState({selection: event.target.value});
        this.setState({selectedCase: this.state.info[this.state.selection - 1]})
        console.log(this.state.selectedCase)
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
            
            <div className="main">
                <h1>VIDEO CARDS</h1>
                <div className="text">Graphical POWER and what could be the most expencive part of your Rig the Video Card. Video cards take the graphics processing load away from your CPU, leaving the CPU to handle other processes. Please keep in mind that if you're not playing HIGH END graphic intence games at their HIGHEST setting, you don't need to break the bank on this. Note the Size, Memory and COST!</div>
                {
                    this.state.info.map(vidList => {
                        return (
                            <div className="itemDisplay">
                                
                                <div className="details">
                                    <input id="cases" type="checkbox" value={vidList} onChange={this.onPick}/>
                                    <img src={vidList.imageurl}/>
                                    <h3 className="itemTitle"> {vidList.name}</h3>
                                    <h4 className="size">Size: {vidList.size} </h4>
                                    <h4 className="size">Memory GBs: {vidList.memoryGB} </h4>
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