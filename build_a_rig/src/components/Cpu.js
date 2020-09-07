import React, { Component } from 'react'
import axios from 'axios';

let cpu = "http://localhost:8080/cpus";
class Cpu extends Component {
    constructor (props) {
        super(props)

        this.state = {
            Info: [],
            cpus: "http://localhost:8080/cpus"
        }

    }


   async componentDidMount() {
        console.log("The api has been grabbed")
        axios.get(this.state.cpus)
        .then(response => {
            this.setState({info: response.data});
        })

        .catch(error => {console.log(error)})
    }

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

export default Cpu