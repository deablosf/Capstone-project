import React, { Component } from 'react'
import axios from 'axios';

let store = "http://localhost:8080/storage";
class Storage extends Component {
    constructor (props) {
        super(props)

        this.state = {
            Info: [],
            storage: "http://localhost:8080/storage"
        }

    }


   async componentDidMount() {
        console.log("The api has been grabbed")
        axios.get(this.state.storage)
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

export default Storage