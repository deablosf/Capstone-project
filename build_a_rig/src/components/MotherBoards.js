import React, { Component } from 'react'
import axios from 'axios';

//let mother = "http://localhost:8080/motherboards";
class MotherBoards extends Component {
    constructor (props) {
        super(props)

        this.state = {
            info: [],
            motherboards: "https://nameless-falls-65963.herokuapp.com/motherboards",
            selection: '',
            selectedCase: '',
            bob: ''
        }

    }


   async componentDidMount() {
        console.log("The api has been grabbed")
        axios.get(this.state.motherboards)
        .then(response => {
            this.setState({info: response.data});
        })

        .catch(error => {console.log(error)})
    }

    onPick = (event) => {
        this.setState({selection: event.target.value});
        this.setState({selectedCase: this.state.info[this.state.selection - 1]})
        console.log(this.state.selectedCase)
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
                <h1>MotherBoards</h1>
                <div className="text">Next lets pick a MotherBoard, this is what all your other computer parts will plug into. All the electricity aand data that the parts share will run through this board. Mother boards dictate what kind of CPU you'll have, how much RAM will be in your computer and the size of the VIDEO CARD. Take note of hte </div>
                {
                    this.state.info.map(boardList => {
                        return (
                            <div className="itemDisplay">
                                
                                <div className="details">
                                    <input id="cases" type="checkbox" value={boardList} onChange={this.onPick}/>
                                    <img src={boardList.imageurl}/>
                                    <h3 className="itemTitle"> {boardList.name}</h3>
                                    <h4 className="size">Size: {boardList.size} </h4>
                                    <h4 className="mem">Max Memory: {boardList.maxmemory} </h4>
                                    <h4 className="socket">Cpu socket: {boardList.cpu_socket} </h4>
                                    <h3 className="cost"> Cost: $ {boardList.cost} </h3>
                                </div>

                            </div>
                            )
                        })
                    }
            </div>
        )
    }
}

export default MotherBoards