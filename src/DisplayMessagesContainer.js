import DisplayMessages from './DisplayMessages';
import { connect } from 'react-redux';
import addMessage from './redux/actions'


//behind the scenes ReactRedux uses store.subscribe() method for mapStateToProps
const mapStateToProps = (state) => {
    return { messages: state.message } // state.message becos in reducers.js i defined message = messageReducer
    // return { messages: state }
};

//behind the scenes ReactRedux uses store.dispatch() method for mapDispatchToProps
// this func is used to provide specific action creators to our React Component so they can dispatch actions against Redux store
////Method 1:
// const mapDispatchToProps = (dispatch) => {
//     return {
//         submitNewMessage: (message) => {
//             dispatch(addMessage(message))
//         }
//     }
// };

//create a new component called Container using 'connect' 
// instead of dispatching actions using Method 1 (which throws error TypeError Obj(...) is not a func)), like so: 
// const DisplayMessagesContainer = connect(mapStateToProps, mapDispatchToProps)(DisplayMessages)
// we can dispatch the actions directly, like so:
const DisplayMessagesContainer = connect(mapStateToProps, addMessage)(DisplayMessages)

export default DisplayMessagesContainer