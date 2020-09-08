import React, { Component } from 'react'
import axios from 'axios';

let ram = "http://localhost:8080/ram";
class Ram extends Component {
    constructor (props) {
        super(props)

        this.state = {
            info: [],
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
            
            <div className="Main">
                <h1>RAM</h1>
                {
                    this.state.info.map(ramList => {
                        return (
                            <div className="itemDisplay">
                                
                                <div className="details">
                                    <input id="cases" type="checkbox" value={ramList} onChange={this.onSearchChange}/>
                                    <img src={ramList.imageurl}/>
                                    <h3 className="itemTitle"> {ramList.name}</h3>
                                    <h4 className="size">GB: {ramList.capacityGB} </h4>
                                    <h4 className="size">Ram Chips: {ramList.number_of_chips} </h4>
                                    <h3 className="cost"> Cost: $ {ramList.cost} </h3>
                                </div>

                            </div>
                            )
                        })
                    }
            </div>
        )
    }
}

export default Ram