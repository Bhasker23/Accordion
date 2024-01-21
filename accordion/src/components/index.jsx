import React, { useState } from "react";
import data from "./data";
import "./style.css";

function Accordion() {
  const [selected, setSelected] = useState();
  const [enableMultiSelection, setEnableMultiSlection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
    console.log(getCurrentId);
  }

  function handleMultipleSelection(getCurrentId) {
    let cpyMultiple = [...multiple];
    const findIndexofCurrentId = cpyMultiple.indexOf(getCurrentId);
    console.log(findIndexofCurrentId);

    if (findIndexofCurrentId === -1) cpyMultiple.push(getCurrentId);
    else cpyMultiple.splice(findIndexofCurrentId, 1);

    setMultiple(cpyMultiple);
  }
  console.log(selected, multiple);
  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSlection(!enableMultiSelection)}>
        Enable Multi Selection
      </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultipleSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.title}</h3>
                <p>+</p>
              </div>
              {enableMultiSelection
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="content">{dataItem.content}</div>
                  )
                : selected === dataItem.id && (
                    <div className="content"> {dataItem.content}</div>
                  )}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
}

export default Accordion;
