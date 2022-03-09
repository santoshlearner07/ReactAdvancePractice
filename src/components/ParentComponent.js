import React, { Component } from 'react'
import PureCompo from './PureCompo'
import RegCompo from './RegCompo'
class ParentComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: 'Santosh'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Santosh'
            })
        }, 2000)
    }

    render() {
        console.log('********Parent********')
        return (
            <div>
                Parent Component
                <RegCompo name={this.state.name} />
                <PureCompo name={this.state.name} />
            </div>
        )
    }
}

export default ParentComponent