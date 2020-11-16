import React from "react";
import Dropdown from "../Dropdown/Dropdown.component";
import Convert from "./Convert.component";

const options = [
  { label: "Afrikaans", value: "af" },
  { label: "Arabic", value: "ar" },
  { label: "Hindi", value: "hi" },
];

const Translate = () => {
  const [language, setLanguage] = React.useState(options[0]);
  const [text, setText] = React.useState("");
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input
            className=""
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>

      <Dropdown
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert text={text} language={language} />
    </div>
  );
};

export default Translate;
