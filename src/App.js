import React from "react";
import "semantic-ui-css/semantic.min.css";

import Accordion from "./components/Accordion/Accordion.component";
import Search from "./components/Search/Search.component";
import Dropdown from "./components/Dropdown/Dropdown.component";
import Translate from "./components/Translate/Translate.component";
import Route from "./components/Route/Route.component";
import Header from "./components/Header/Header.component";

import { items, options } from "./data";

const App = () => {
  const [selected, setSelected] = React.useState(options[0]);
  const [showDropdown, setShowDropdown] = React.useState(true);
  return (
    <div className="App-container">

      <Header />
      <div className="ui container">
        <Route path="/">
          <Accordion items={items} />
        </Route>
        <Route path="/list">
          <Search />
        </Route>
        <Route path="/dropdown">
          <div>
            <button
              className="ui button"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              Toggle Dropdown
            </button>
            {showDropdown ? (
              <Dropdown
                selected={selected}
                onSelectedChange={setSelected}
                options={options}
              />
            ) : null}
          </div>
        </Route>
        <Route path="/translate">
          <Translate />
        </Route>
      </div>
    </div>
  );
};

export default App;
