import React, { Component } from 'react'
import axios from 'axios';

let ram = "http://localhost:8080/ram";
class Ram extends Component {
    constructor (props) {
        super(props)

        this.state = {
            Info: [],
            ram: "http://localhost:8080/ram"
        }

    }


   componentDidMount() {
        console.log("The api has been grabbed")
        axios.get(this.state.ram)
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

export default Ram