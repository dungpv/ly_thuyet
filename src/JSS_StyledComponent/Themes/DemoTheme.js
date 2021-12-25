import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";

const configDarkTheme = {
  background: "#000",
  color: "#FFFFFF",
  fontSize: "20px",
  fontWeight: "bold",
};

const configLightTheme = {
  background: "#6633FF",
  color: "#FFF",
  fontSize: "24px",
  fontWeight: "300",
};

export default class DemoTheme extends Component {
  state = {
    currentTheme: configDarkTheme,
  };

  handleChangeTheme = (event) => {
    this.setState({
      currentTheme:
        event.target.value === "1" ? configDarkTheme : configLightTheme,
    });
  };

  render() {
    const DivStyle = styled.div`
      color: ${(props) => props.theme.color};
      padding: 10px;
      background-color: ${(props) => props.theme.background};
      font-size: ${(props) => props.theme.fontSize};
      font-weight: ${(props) => props.theme.fontWeight};
    `;
    return (
      <ThemeProvider theme={this.state.currentTheme}>
        <DivStyle>Hello Dũng</DivStyle>
        <select onChange={this.handleChangeTheme}>
          <option value="1">Dark Theme</option>
          <option value="2">Light Theme</option>
        </select>
      </ThemeProvider>
    );
  }
}
