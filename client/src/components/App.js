import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';

//const Header = () => <h2>Header</h2>;
const Dashbord = () => {
  return <h2>Dashbord</h2>;
};

const SurveyNew = () => <h2>Survey New</h2>;
const Landing = () => <h2>Landing</h2>;

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/surveys" component={Dashbord} />
          <Route path="/surveys/new" component={SurveyNew} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
