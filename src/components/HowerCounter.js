import React, { Component } from 'react'
import WithCounter from './WithCounter'
import UpdatedComponent from './WithCounter'
class HowerCounter extends Component {

    render() {
        const { count,incrementCount} = this.props
        return (
            <div>
                <h2 onMouseOver={incrementCount}>
                 Howered {count} Counter
                </h2>
            </div>
        )
    }
}

export default WithCounter(HowerCounter,2)