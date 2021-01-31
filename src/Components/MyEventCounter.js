import React, { Component } from 'react'

export default class MyEventCounter extends Component {
    render() {
        return (
            <div>
                <p> <p>Clicked:{this.props.even}times</p></p>
            </div>
        );
    }
}

