import React, {Component} from 'react'

class MyCounterComponent extends Component {
    render(){
    return(
            <div>
            <p>Click me button is clicked:{this.props.count}</p>
            </div>
    
    
       
    );
}
}

export default MyCounterComponent
 