// npx create-react-app app1
// delete all in src except App.js, index.js
// in index.js keep only react, reactdom and app imports delete others
// delete all in public except index.html

// to host the app type : npm start
-------------------------------------------------------------------------------------
//App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './Home';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import PageNotFound from './PageNotFound';

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
               <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={AboutUs} />
          <Route path="/contact" component={ContactUs} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;


-------------------------------------------------------------------------------------
//components
        // components/AboutUs.js
        import React from "react";
        const AboutUs = () => {
          return <h1>About Us Page</h1>;
        };
        export default AboutUs;
        -------------------------------------------
        // components/Home.js
        import React from "react";
        const Home = () => {
          return <h1>Welcome to the Home Page!</h1>;
        };
        export default Home;
        -------------------------------------------

        // components/ContactUs.js
        import React from "react";
        const ContactUs = () => {
          return <h1>pls reach us on these mail address</h1>;
        };
        export ContactUs ;

        -------------------------------------------
        // components/PageNotFound.js
        import React from "react";
        const PageNotFound = () => {
          return <h1>page not found error</h1>;
        };
        export default PageNotFound;
-------------------------------------------------------------------------------------
//index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

