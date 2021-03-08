import React, { useState } from "react";
import Button from "../../Button";

function Form({ onSubmit, defaultValue = "" }) {
  const [itemName, setItemName] = useState(defaultValue);

  return (
    <>
      <input
        value={itemName}
        onChange={(event) => setItemName(event.target.value)}
      />
      <Button title="Submit" onClick={() => onSubmit(itemName)} />
    </>
  );
}

export default Form;
