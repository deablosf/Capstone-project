import React, { Component } from 'react'
import axios from 'axios';

class Cases extends Component {
    constructor (props) {
        super(props)

        this.state = {
            info: [],
            cases: "http://localhost:8080/cases",
            selectedCase: ""
        }

    }

    // When component mounts 
   componentDidMount() {
        console.log("The api has been grabbed")
        axios.get(this.state.cases)
        .then(response => {
            this.setState({info: response.data});
        })

        .catch(error => {console.log(error)})
    }


    onSearchChange = (event) => {
        this.setState({selectedCase: event.target.value});
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
            <div className="Main">
                <h1>Cases</h1>
                <h3> The existing: {this.state.selectedCase}</h3>
                <h3> The existing: {this.state.selectedCase.name}</h3>
                {
                    this.state.info.map(caseList => {
                        return (
                            <div className="itemDisplay">
                                
                                <div className="details">
                                    <input id="cases" type="checkbox" value={caseList} onChange={this.onSearchChange}/>
                                    <img src={caseList.imageurl}/>
                                    <h3 className="itemTitle"> {caseList.name}</h3>
                                    <h4 className="size">Size: {caseList.size} </h4>
                                    <h3 className="cost"> Cost: $ {caseList.cost} </h3>
                                </div>

                            </div>
                        )
                    })
                }
                
            </div>
        )
    }
}

export default Cases