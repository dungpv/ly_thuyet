import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import { Container } from "../../Containers/Container";
import { ToDoListDarkTheme } from "../../Themes/ToDoListDarkTheme";
import { ToDoListLightTheme } from "../../Themes/ToDoListLightTheme";
import { ToDoListPrimaryTheme } from "../../Themes/ToDoListPrimaryTheme";

export default class ToDoList extends Component {
  render() {
    return (
      <ThemeProvider theme={ToDoListPrimaryTheme}>
        <Container>abc</Container>
      </ThemeProvider>
    );
  }
}
