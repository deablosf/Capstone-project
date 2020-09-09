import React, { Component } from 'react'
import axios from 'axios';


// "http://localhost:8080/cases",
class Cases extends Component {
    constructor (props) {
        super(props)

        this.state = {
            info: [],
            cases: "https://nameless-falls-65963.herokuapp.com/cases",
            selection: '',
            selectedCase: '',
            bob: ''
        }

    }

    // When component mounts 
   
    componentDidMount() {
        console.log("The api has been grabbed")
        axios.get(this.state.cases)
        .then(response => {
            this.setState({info: response.data});
            console.log(this.state.info)
        })

        .catch(error => {console.log(error)})
    }


    onPick = (event) => {
        this.setState({selection: event.target.value});
        this.setState({selectedCase: this.state.info[this.state.selection - 1]})
        this.setState({selectedCase: this.state.info[this.state.selection - 1]})
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
            <div className="main">
                <h1>Cases</h1>
                <div className="text">First lets choose a that we like. Please take notice of the prices and sizes. An average computer has a case size of "Medium" but most gaming computer case are "Large" to make room for the beefier Video cards.</div>
                {
                    this.state.info.map(caseList => {
                        return (
                            <div className="itemDisplay">
                                
                                <div className="details">
                                    <input id="cases" type="checkbox" value={caseList.id} onChange={this.onPick}/>
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