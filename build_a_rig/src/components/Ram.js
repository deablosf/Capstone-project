import React, { Component } from 'react'
import axios from 'axios';

//let ram = "http://localhost:8080/ram";
class Ram extends Component {
    constructor (props) {
        super(props)

        this.state = {
            info: [],
            ram: "https://nameless-falls-65963.herokuapp.com/ram",
            selection: '',
            selectedCase: '',
            bob: ''
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

    onPick = (event) => {
        this.setState({selection: event.target.value});
        this.setState({selectedCase: this.state.info[this.state.selection - 1]})
        console.log(this.state.selectedCase)
    }

    render() {
        
       
        return (
            
            <div className="main">
                <h1>RAM</h1>
                <div className="text">Random Access Memory, in the old days you needed TONS of Ram in order to have your computer run faster than molassis. Any program stored in your STORAGE is moved to the Ram in order to make running is smoother. Take note ofthe Ram Chips number, most Ram chips are sold in pairs and the GB(GigaByts) is for one a single Ram chip</div>
                {
                    this.state.info.map(ramList => {
                        return (
                            <div className="itemDisplay">
                                
                                <div className="details">
                                    <input id="cases" type="checkbox" value={ramList} onChange={this.onPick}/>
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