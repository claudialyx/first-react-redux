import React from 'react';

//// React Code:
export default class DisplayMessages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            // remove this line as this will mean that we are handling the state locally within our component 
            //and not utilizing Redux.
            // messages: [], 
        }
    }

    handleChange = (event) => {
        this.setState({
            input: event.target.value
        })
    }

    submitMessage = () => {
        console.log(this.props.submitNewMessage)
        // this.props.submitNewMessage(this.state.input)
        this.props.addMessage(this.state.input)
        this.setState({
            input: '',
            // messages: [...this.state.messages].concat(this.state.input)
        })
    }

    render() {
        const { input } = this.state
        console.log('message type:', typeof (this.props.messages))
        console.log('submitNewMessage type:', typeof (this.props.submitNewMessage))
        return (
            <div>
                <h3>Type in a new message</h3>
                <input value={input} onChange={this.handleChange} />
                <button onClick={this.submitMessage}>Submit</button>
                {/* <ul>{messages.map((message, index) => <li key={index}>{message}</li>)}</ul> */}
                <ul>{this.props.messages.map((message, index) => <li key={index}>{message}</li>)}</ul>
            </div >
        )
    }
}