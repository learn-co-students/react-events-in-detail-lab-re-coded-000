const React = require('react');

class DelayedButton extends React.Component{
  constructor(props) {
  super();
  this.callBack=this.callBack.bind(this)

}

  callBack(e){
    var obj=this;
    e.persist();
    setTimeout(function(){return obj.props.onDelayedClick(e);},this.props.delay);
  }

  render(){

    return(
    <div className="DelayedButton" >

    <button onClick={this.callBack} >Click</button>
   </div>
    )

  }

}


module.exports=DelayedButton
