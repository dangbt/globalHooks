import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import './App.css';
import { store, useStore } from './hooksStore';

// hook là 1 state 1 setState =>>>>>>>>>>>> global thì có thể share cho nhiều component state đó


// setting the store initial state
store.state = {
  time: 0,
  date: 2
};

function StatefulHello() {
  // using the useStore hook
  const [timesClicked, updateTimesClicked] = useStore();

  return (
    <div>
      <h1>Hello, component!</h1>
      <h2> {timesClicked.time} times</h2>
      <h2> {timesClicked.date} date</h2>
      <button type="button" onClick={() => updateTimesClicked({ ...timesClicked, time: timesClicked.time + 1 })}>
        Update
      </button>
      <button type="button" onClick={() => updateTimesClicked({ ...timesClicked, date: timesClicked.date + 1 })}>
        Update
      </button>
    </div>
  );
}

function AnotherComponent() {
  // using the useStore hook here as well. The same state will be shared here.
  const [ timesClicked, updateTimesClicked ] = useStore();
  console.log(timesClicked)
  return (
    <div>
      <h1>
        Hello, this is a second component, with no relation to the one on the
        top
      </h1>
      <h2>
      <button type="button" onClick={() => updateTimesClicked({ ...timesClicked, time: timesClicked.time + 1})}>
        Update
      </button> */}
        Using the useStore hook, I know the user clicked on the button { timesClicked.time } times!
     </h2>
    </div>
  );
}


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
           </ul>
        </nav>

        <Route path="/" exact component={StatefulHello} />
        <Route path="/about/" component={AnotherComponent} />
      </div>
    </Router>
  );
}

export default App;
