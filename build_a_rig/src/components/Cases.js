import React, { Component } from 'react'
import axios from 'axios';

let cases = "http://localhost:8080/cases";
class Cases extends Component {
    constructor (props) {
        super(props)

        this.state = {
            Info: [],
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
            
            <div>
                
                {/* {
                    this.state.info.map(cases => {
                        return (
                            <div className="fullReadOut">
                                <a href={cases.href}> <img src={cases.imageurl}/> </a>
                                
                                <div className="details">
                                    <h2 className="foodTitles"> <a className="foodNames" href={cases.href}>{cases.name}</a> </h2>
                                    
                                    <h3 className="ingred"> Cost: $ {cases.cost} </h3>
                                </div>

                            </div>
                        )
                    })
                } */}
            </div>
        )
    }
}

export default Cases