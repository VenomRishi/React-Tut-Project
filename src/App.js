import React from "react";
// import logo from './logo.svg';
import "./App.css";
// import Stylesheets from './components/css/Stylesheets';
// import "./components/css/appStyle.css";
// import RefsDemo from './components/refs/RefsDemo';
// import FocusInput from './components/refs/FocusInput';
// import FRParentInput from './components/refs/FRParentInput';
// import PortalDemo from './components/PortalDemo';
import ClickCounter from './components/higherOrderComps/ClickCounter';
import HoverCounter from './components/higherOrderComps/HoverCounter';
// import Table from './components/fragment/Table';
// import PureComp from './components/pureComponent/PureComp';
// import ParentComp from './components/pureComponent/ParentComp';
// import FragmentDemo from './components/fragment/FragmentDemo';
// import style from './components/css/appStyle.module.css'
// import Inline from './components/css/Inline';
// import Form from './components/form/Form';
// import LifeCycleA from './components/lifeCycle/mountingLifeCycle/LifeCycleA';
// import LifeCycleC from './components/lifeCycle/updatingLifeCycle/LifeCycleC';
// import NameList from './components/listRendering/NameList';
// import UserGreeting from './components/ConditionalRendering/UserGreeting';
// import of functional component
// import MyComponent from './components/Greet'
// import Hello from './components/Hello'
// import { Message } from './components/Message'

// import of class component
// import Counter from './components/Counter'

// import Hello from './components/Hello'
// import FunctionClick from './components/eventHandler/FunctionClick'
// import ClassClick from './components/eventHandler/ClassClick'
// import EventBind from './components/eventBinding/EventBind'
// import ParentComponent from './components/ParentComponent';
// import Counter from "./components/renderProps/Counter";
// import ClickCounter from "./components/renderProps/ClickCounter";
// import HoverCounter from "./components/renderProps/HoverCounter";
// import CompC from "./components/context/CompC";
// import { UserProvider } from "./components/context/userContext";

function App() {
  return (
    <div className="App">
      {/* <PureComp/>
      <UserProvider value="rishikesh">
        <CompC />
      </UserProvider> */}

      {/* <Counter>
        {(count, incrementCount) => (
          <ClickCounter
            count={count}
            incrementCount={incrementCount}
          ></ClickCounter>
        )}
      </Counter>
      <Counter>
        {(count, incrementCount) => (
          <HoverCounter
            count={count}
            incrementCount={incrementCount}
          ></HoverCounter>
        )}
      </Counter> */}
      <ClickCounter />
      <HoverCounter />
      {/* <PortalDemo /> */}
      {/* <FRParentInput/> */}
      {/* <FocusInput/> */}
      {/* <RefsDemo/> */}
      {/* <ParentComp /> */}
      {/* <PureComp />  */}
      {/* <Table /> */}
      {/* <FragmentDemo /> */}
      {/* <LifeCycleC /> */}
      {/* <LifeCycleA /> */}
      {/* <Form /> */}
      {/* <h1 className="success">Success</h1>
      <h1 className={style.error}>Error</h1>
      <Inline/> */}
      {/* <Stylesheets primary={true} /> */}
      {/* <NameList/> */}
      {/* <UserGreeting/> */}
      {/* <ParentComponent/> */}
      {/* <MyComponent/>
      <Welcome/> */}
      {/* <Hello name="rishi" heroName="batman">
        <p>This is the simple paragrap</p>
      </Hello>
      <Hello name="abhi" heroName="superman" />
      <Hello name="mark" heroName="shaktiman" /> */}

      {/* <Welcome /> */}
      {/* <Counter></Counter> */}
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <EventBind/> */}
    </div>
  );
}

export default App;
