import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/public">Public Page</Link>
        </li>
        <li>
          <Link to="/protected">Protected Page</Link>
        </li>
      </ul>
      <Route path="/public" component={Public} />
      <Route path="/login" component={Login} />
      <PrivateRoute path='protected' component={Protected} />
    </div>
  );
}



export default App;
