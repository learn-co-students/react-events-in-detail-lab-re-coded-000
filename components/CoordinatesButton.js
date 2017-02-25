const React = require('react');

class CoordinatesButton extends React.Component{
  constructor(props) {
  super();

  this.callBack=this.callBack.bind(this)

}

  callBack(e){this.props.onReceiveCoordinates([e.clientX,e.clientY]);}

  render(){

    return(
    <div className="CoordinatesButton" >
    <button onClick={this.callBack} >Click</button>
   </div>
    )

  }

}

module.exports=CoordinatesButton
