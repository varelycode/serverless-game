import React, { createElement } from 'react';


const mainStyle = {
    display: 'flex',
    background: 'D0DAFF'
}

const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    flex: 1,
    width: 500,
    background: '#001F94'
}

const childStyle = {
    flex: 1,
    background: '#FF5733'
}


// React.createElement(
//     type, - html tag type, react component type, or react fragment type
//     [props],
//     [...children] -- children
//   )



class Menu extends React.Component {
    render() {
      return React.createElement(
        "div",
        {style: mainStyle},
        <CenteredContainer child_age = {this.props.age} />,
        this.props.name
      );
    }
}



class CenteredContainer extends React.Component{
    render(){
        return React.createElement(
            "div",
            {style: containerStyle},
            [<ContainerItem grand_age = {this.props.child_age}/>, <ContainerItem grand_age = {this.props.child_age}/>],
            this.props.child_age
        );
    }
}


class ContainerItem extends React.Component{
    render(){
        return React.createElement(
            "div",
            {style: childStyle},
            "You are age: ",
            this.props.grand_age
        );
    }
}


function Contacts() {
    return <div className="Contacts" />;
  }
  
  function Chat() {
    return <div className="Chat" />;
  }

function FlexWrapper(props) {
    return (
      <div className="SplitPane">
        <div className="SplitPane-left">
          {props.left}
        </div>
        <div className="SplitPane-right">
          {props.right}
        </div>
      </div>
    );
  }

// ReactDOM.render(React.createElement(Menu, { name: "Taylor" }), document.getElementById('hello'));
export default Menu;