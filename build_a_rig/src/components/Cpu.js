import React, { Component } from 'react'
import axios from 'axios';

//let cpu = "http://localhost:8080/cpus";
class Cpu extends Component {
    constructor (props) {
        super(props)

        this.state = {
            info: [],
            cpus: "https://nameless-falls-65963.herokuapp.com/cpus",
            selection: '',
            selectedCase: '',
            bob: ''
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

    onPick = (event) => {
        this.setState({selection: event.target.value});
        this.setState({selectedCase: this.state.info[this.state.selection - 1]})
        console.log(this.state.selectedCase)
    }

    render() {
        
       
        return (
                <div className="main">
                <h1>CPUs</h1>
                <div className="text">Now, the CPU; the Central Processing Unit, or the brain of your computer. There are only two companies that sale Cpus to the general public; AMD and INTEL. Both are produce great products. take note of the cpu socket(to match the MOTHERBOARD) cost and cores.</div>
                {
                    this.state.info.map(cpuList => {
                        return (
                            <div className="itemDisplay">
                                
                                <div className="details">
                                    <input id="cases" type="checkbox" value={cpuList} onChange={this.onPick}/>
                                    <img src={cpuList.imageurl}/>
                                    <h3 className="itemTitle"> {cpuList.name}</h3>
                                    <h4 className="size">GHz: {cpuList.frequency} </h4>
                                    <h4 className="size">Cores: {cpuList.cores} </h4>
                                    <h4 className="size">Cpu socket: {cpuList.cpu_socket} </h4>
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