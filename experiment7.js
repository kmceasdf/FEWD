// npx create-react-app app1
// delete all in src except App.js, index.js
// in index.js keep only react, reactdom and app imports delete others
// delete all in public except index.html

// to host the app type : npm start

-------------------------------------------------------------------------------------
//App.js
import useContextEx from "./UseContextEx.js"

function App() {
  return (
    <div className="App">
      <useContextEx/>
    </div>
  );
}
export default App;
---------------------------------------------------------------

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
-----------------------------------------------------------------------
//useContextEx.js
import React, { useContext } from 'react';

const theme = {
    light : {background: "#fff"},
    dark: {background: "#000"}
}

const ThemeContext = React.createContext(theme.light)

function useContextEx(props) {
  return (
    <div>
        {}
        <ThemeContext.Provider value={theme.dark}>
                <Body />
        </ThemeContext.Provider>
    </div>
  );
}

function Body(){
    const theme = useContext(ThemeContext);
    return(
        <main
            style={{background : theme.background, height: "50vh", color: "#fff" }}
        >
            I am the main display styled by context!
        </main>
    )
}
export default useContextEx;



