import React, { Component } from 'react'
import axios from 'axios'

class Build extends Component {
    constructor (props) {
        super(props)

        this.state = {
            info1: [],
            info2: [],
            info3: [],
            info4: [],
            info5: [],
            info6: [],
            cases: "https://nameless-falls-65963.herokuapp.com/cases",
            motherboards: "https://nameless-falls-65963.herokuapp.com/motherboards",
            cpus: "https://nameless-falls-65963.herokuapp.com/cpus",
            ram: "https://nameless-falls-65963.herokuapp.com/ram",
            videocards: "https://nameless-falls-65963.herokuapp.com/videocards",
            storage: "https://nameless-falls-65963.herokuapp.com/storage",
            selection: '',
            selectedCase: '',
            selectedBoard: '',
            selectedCpu: '',
            selectedRam: '',
            selectedVideo: '',
            selectedStorage: ''
        }

    }

    componentDidMount() {
        console.log("The api has been grabbed")
        axios.get(this.state.cases)
        .then(response => {
            this.setState({info1: response.data});
        })
        // axios.get(this.state.motherboards)
        // .then(response => {
        //     this.setState({info2: response.data});
        // })
        // axios.get(this.state.cpus)
        // .then(response => {
        //     this.setState({info3: response.data});
        // })
        // axios.get(this.state.ram)
        // .then(response => {
        //     this.setState({info4: response.data});
        // })
        // axios.get(this.state.videocards)
        // .then(response => {
        //     this.setState({info5: response.data});
        // })
        // axios.get(this.state.storage)
        // .then(response => {
        //     this.setState({info6: response.data});
        // })
        .catch(error => {console.log(error)})
    }

    pick1 = (event) => {
        this.setState({selection: event.target.value});
        this.setState({selectedCase: this.state.info1[this.state.selection - 1]})
        console.log(this.state.selectedCase)
    }

    pick2 = (event) => {
        this.setState({selection: event.target.value});
        this.setState({selectedBoard: this.state.info2[this.state.selection - 1]})
        console.log(this.state.selectedCase)
    }

    pick3 = (event) => {
        this.setState({selection: event.target.value});
        this.setState({selectedCpu: this.state.info3[this.state.selection - 1]})
        console.log(this.state.selectedCase)
    }

    pick4 = (event) => {
        this.setState({selection: event.target.value});
        this.setState({selectedRam: this.state.info4[this.state.selection - 1]})
        console.log(this.state.selectedCase)
    }

    pick5 = (event) => {
        this.setState({selection: event.target.value});
        this.setState({selectedVideo: this.state.info5[this.state.selection - 1]})
        console.log(this.state.selectedCase)
    }

    pick6 = (event) => {
        this.setState({selection: event.target.value});
        this.setState({selectedStorage: this.state.info6[this.state.selection - 1]})
        console.log(this.state.selectedCase)
    }

    render() {
        return (
            <div className="main">
                <h1>Cases</h1>
                <div className="text">First lets choose a that we like. Please take notice of the prices and sizes. An average computer has a case size of "Medium" but most gaming computer case are "Large" to make room for the beefier Video cards.</div>
                {/* {
                    this.state.info1.map(caseList => {
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
                <h1>MotherBoards</h1>
                <div className="text">Next lets pick a MotherBoard, this is what all your other computer parts will plug into. All the electricity aand data that the parts share will run through this board. Mother boards dictate what kind of CPU you'll have, how much RAM will be in your computer and the size of the VIDEO CARD. Take note of hte </div>
                {
                    this.state.info2.map(boardList => {
                        return (
                            <div className="itemDisplay">
                                
                                <div className="details">
                                    <input id="cases" type="checkbox" value={boardList} onChange={this.onPick}/>
                                    <img src={boardList.imageurl}/>
                                    <h3 className="itemTitle"> {boardList.name}</h3>
                                    <h4 className="size">Size: {boardList.size} </h4>
                                    <h4 className="mem">Max Memory: {boardList.maxmemory} </h4>
                                    <h4 className="socket">Cpu socket: {boardList.cpu_socket} </h4>
                                    <h3 className="cost"> Cost: $ {boardList.cost} </h3>
                                </div>

                            </div>
                            )
                        })
                    }
                    <h1>CPUs</h1>
                <div className="text">Now, the CPU; the Central Processing Unit, or the brain of your computer. There are only two companies that sale Cpus to the general public; AMD and INTEL. Both are produce great products. take note of the cpu socket(to match the MOTHERBOARD) cost and cores.</div>
                {
                    this.state.info3.map(cpuList => {
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
                    <h1>RAM</h1>
                <div className="text">Random Access Memory, in the old days you needed TONS of Ram in order to have your computer run faster than molassis. Any program stored in your STORAGE is moved to the Ram in order to make running is smoother. Take note ofthe Ram Chips number, most Ram chips are sold in pairs and the GB(GigaByts) is for one a single Ram chip</div>
                {
                    this.state.info4.map(ramList => {
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
                    <h1>VIDEO CARDS</h1>
                <div className="text">Graphical POWER and what could be the most expencive part of your Rig the Video Card. Video cards take the graphics processing load away from your CPU, leaving the CPU to handle other processes. Please keep in mind that if you're not playing HIGH END graphic intence games at their HIGHEST setting, you don't need to break the bank on this. Note the Size, Memory and COST!</div>
                {
                    this.state.info5.map(vidList => {
                        return (
                            <div className="itemDisplay">
                                
                                <div className="details">
                                    <input id="cases" type="checkbox" value={vidList} onChange={this.onPick}/>
                                    <img src={vidList.imageurl}/>
                                    <h3 className="itemTitle"> {vidList.name}</h3>
                                    <h4 className="size">Size: {vidList.size} </h4>
                                    <h4 className="size">Memory GBs: {vidList.memoryGB} </h4>
                                    <h3 className="cost"> Cost: $ {vidList.cost} </h3>
                                </div>

                            </div>
                            )
                        })
                    }
                    <h1>STORAGE</h1>
                <div className="text">What was once THICC metal bricks of data storage have become chips themselves; Storage A.K.A Hard Drives. This is what holds all your data; Photos, music, videos, Games and all manner of programs. Thanks to cloud storage and streaming; having a massive amount of storage is no longer a necessity. Unless your a Developer, Editor, Gamer, Pirate or digital creator of any type. Note the TB(TeraBytes, 1TB = 1000GB) and the Drive type which will effect how it connects to your MOTHERBOARD.</div>
                {
                    this.state.info6.map(storageList => {
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
                    } */}
                
            </div>
        )
    }
}

export default Build