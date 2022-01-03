import React, { Component } from "react";
import ContextProvider from "./Hooks/Context/ContextProvider";
import DemoUseContext from "./Hooks/DemoUseContext";
// import DemoUseReducer from "./Hooks/DemoUseReducer";
// import DemoUseRef from "./Hooks/DemoUseRef";
// import DemoHookUseMemo from "./Hooks/DemoHookUseMemo";
// import DemoHookUseCallBack from "./Hooks/DemoHookUseCallBack";
// import DemoHookUseEffect from "./Hooks/DemoHookUseEffect";
// import DemoHookUseState from "./Hooks/DemoHookUseState";
// import LifeCycleReact from "./LifeCycleReact/LifeCycleReact";
// import ToDoList from "./JSS_StyledComponent/BaiTapStyleComponent/ToDoList/ToDoList";
// import DemoTheme from "./JSS_StyledComponent/Themes/DemoTheme";
// import DemoJSS from "./JSS_StyledComponent/DemoJSS/DemoJSS";
// import UserProfile from "./FormValidation/UserProfile/UserProfile";

function App() {
  return (
    <ContextProvider>
      {/* <UserProfile></UserProfile> */}
      {/* <DemoJSS></DemoJSS> */}
      {/* <DemoTheme></DemoTheme> */}
      {/* <ToDoList></ToDoList> */}
      {/* <LifeCycleReact></LifeCycleReact> */}
      {/* <DemoHookUseState></DemoHookUseState> */}
      {/* <DemoHookUseEffect></DemoHookUseEffect> */}
      {/* <DemoHookUseCallBack></DemoHookUseCallBack> */}
      {/* <DemoHookUseMemo></DemoHookUseMemo> */}
      {/* <DemoUseRef></DemoUseRef> */}
      {/* <DemoUseReducer></DemoUseReducer> */}
      <DemoUseContext></DemoUseContext>
    </ContextProvider>
  );
}

export default App;
