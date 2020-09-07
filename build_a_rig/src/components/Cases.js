import React, { Component } from 'react'
import axios from 'axios';

class Cases extends Component {
    constructor (props) {
        super(props)

        this.state = {
            info: [],
            cases: "http://localhost:8080/cases"
        }

    }


   componentDidMount() {
        console.log("The api has been grabbed")
        axios.get(this.state.cases)
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
            <div className="Main">
                <h1>Cases</h1>
                {
                    this.state.info.map(caseList => {
                        return (
                            <div className="itemDisplay">
                                <img src={caseList.imageurl}/>
                                
                                <div className="details">
                                    <h2 className="itemTitle"> {caseList.name}</h2>
                                    <h3 className="size">Size </h3>
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