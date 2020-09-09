import React, { Component } from 'react'
import axios from 'axios';

//let mother = "http://localhost:8080/motherboards";
class MotherBoards extends Component {
    constructor (props) {
        super(props)

        this.state = {
            info: [],
            motherboards: "https://nameless-falls-65963.herokuapp.com/motherboards"
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
                <div className="text"></div>
                {
                    this.state.info.map(boardList => {
                        return (
                            <div className="itemDisplay">
                                
                                <div className="details">
                                    <input id="cases" type="checkbox" value={boardList} onChange={this.onSearchChange}/>
                                    <img src={boardList.imageurl}/>
                                    <h3 className="itemTitle"> {boardList.name}</h3>
                                    <h4 className="size">Size: {boardList.size} </h4>
                                    <h4 className="size">Max Memory: {boardList.type} </h4>
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