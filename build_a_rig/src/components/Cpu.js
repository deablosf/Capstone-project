import React, { Component } from 'react'
import axios from 'axios';

//let cpu = "http://localhost:8080/cpus";
class Cpu extends Component {
    constructor (props) {
        super(props)

        this.state = {
            info: [],
            cpus: "https://nameless-falls-65963.herokuapp.com/cpus"
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
                <div className="Main">
                <h1>CPUs</h1>
                {
                    this.state.info.map(cpuList => {
                        return (
                            <div className="itemDisplay">
                                
                                <div className="details">
                                    <input id="cases" type="checkbox" value={cpuList} onChange={this.onSearchChange}/>
                                    <img src={cpuList.imageurl}/>
                                    <h3 className="itemTitle"> {cpuList.name}</h3>
                                    <h4 className="size">GHz: {cpuList.frequency} </h4>
                                    <h4 className="size">Cores: {cpuList.cores} </h4>
                                    <h3 className="cost"> Cost: $ {cpuList.cost} </h3>
                                </div>

                            </div>
                            )
                        })
                    }
            </div>
        )
    }
}

export default Cpu