import React, { Component } from 'react'
import axios from 'axios';

//let store = "http://localhost:8080/storage";
class Storage extends Component {
    constructor (props) {
        super(props)

        this.state = {
            info: [],
            storage: "https://nameless-falls-65963.herokuapp.com/storage",
            selection: '',
            selectedCase: '',
            bob: ''
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

    onPick = (event) => {
        this.setState({selection: event.target.value});
        this.setState({selectedCase: this.state.info[this.state.selection - 1]})
        console.log(this.state.selectedCase)
    }

    render() {
        
       
        return (
            
            <div className="main">
                <h1>STORAGE</h1>
                <div className="text">What was once THICC metal bricks of data storage have become chips themselves; Storage A.K.A Hard Drives. This is what holds all your data; Photos, music, videos, Games and all manner of programs. Thanks to cloud storage and streaming; having a massive amount of storage is no longer a necessity. Unless your a Developer, Editor, Gamer, Pirate or digital creator of any type. Note the TB(TeraBytes, 1TB = 1000GB) and the Drive type which will effect how it connects to your MOTHERBOARD.</div>
                {
                    this.state.info.map(storageList => {
                        return (
                            <div className="itemDisplay">
                                
                                <div className="details">
                                    <input id="cases" type="checkbox" value={storageList} onChange={this.onPick}/>
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