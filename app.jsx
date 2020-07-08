// import React from 'react';
// import ReactDOM from 'react-dom';
//
// class Message extends React.Component{
//     render(){
//         let divStyle = {marginBottom: 20}
//         let messageStyle = {marginLeft: 20}
//         return(
//             <div style={divStyle}>
//                 <div>
//                     {`${this.props.name}對大家說：`}
//                 </div>
//                 <div style={messageStyle}>
//                     {this.props.message}
//                 </div>
//             </div>
//         )
//     }
// }
//
// class MessageBlock extends React.Component{
//     render(){
//         let message = this.props.messageData.map(item =>
//             item.name.indexOf(this.props.searchName)!=-1 ||
//             item.message.indexOf(this.props.searchName)!=-1 ?
//             <Message key={item.key}
//                      name={item.name}
//                      message={item.message}
//             />:null)
//         return (
//             <div>
//                 {message}
//             </div>
//         )
//     }
// }
//
// class SearchBlock extends React.Component{
//     render(){
//         return(
//             <div>
//                 <span>searchPeople:</span>
//                 <input type="text"
//                        value={this.props.searchName}
//                        onChange={this.props._changeState}
//                 />
//             </div>
//         )
//     }
// }
//
// class MessageForm extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             name: ``,
//         }
//         this._changeState = this._changeState.bind(this)
//     }
//     _changeState(){
//         this.setState({
//             name: event.target.value
//         })
//     }
//     render(){
//         return(
//             <div>
//                 <SearchBlock searchName={this.state.name}
//                              _changeState={this._changeState}
//                 />
//                 <hr/>
//                 <MessageBlock messageData={this.props.messageData}
//                               searchName={this.state.name}
//                 />
//             </div>
//         )
//     }
// }
// ReactDOM.render(<MessageForm messageData={data} />,document.getElementById('root'))