import React, { Component } from 'react'
import axios from 'axios';

let mother = "http://localhost:8080/motherboards";
class MotherBoards extends Component {
    constructor (props) {
        super(props)

        this.state = {
            Info: [],
            motherboards: "http://localhost:8080/motherboards"
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
            
            <div>
                
                {/* {
                    this.state.info.map(cases => {
                        return (
                            <div className="fullReadOut">
                                 <img src={cases.imageurl}/>
                            </div>
                        )
                    })
                } */}
            </div>
        )
    }
}

export default MotherBoards