import React, { Component } from 'react'
import axios from 'axios';

//let store = "http://localhost:8080/storage";
class Storage extends Component {
    constructor (props) {
        super(props)

        this.state = {
            info: [],
            storage: "https://nameless-falls-65963.herokuapp.com/storage"
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
            
            <div className="Main">
                <h1>STORAGE</h1>
                {
                    this.state.info.map(storageList => {
                        return (
                            <div className="itemDisplay">
                                
                                <div className="details">
                                    <input id="cases" type="checkbox" value={storageList} onChange={this.onSearchChange}/>
                                    <img src={storageList.imageurl}/>
                                    <h3 className="itemTitle"> {storageList.name}</h3>
                                    <h4 className="size">TB: {storageList.storageSize /1024} </h4>
                                    <h4 className="size">Drive Type: {storageList.type} </h4>
                                    <h3 className="cost"> Cost: $ {storageList.cost} </h3>
                                </div>

                            </div>
                            )
                        })
                    }
            </div>
        )
    }
}

export default Storage