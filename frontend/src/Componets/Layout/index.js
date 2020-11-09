import React, { Component } from "react";
import Navbar from "../../Componets/nav/NavBar";


import GlobalStyle from "../../styles/Global";

class App extends Component {
  state = {
    navbarOpen: false,
  };

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  };

  render() {
    return (
      <>
        <Navbar/>
        <div >
          {this.props.children}
        </div>
        <GlobalStyle />

      </>
    );
  }
}

export default App;