import { useState } from "react";

function Form() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
  }

  function sum() {
    let arr = value.split(",");
    console.log(arr);
    let total = 0;

    for (let i = 0; i < arr.length; i++) {
      // to check if strings contains digit
      if (!isNaN(arr[i].trim())) {
        total += Number(arr[i]);
      } else {
        continue;
      }
    }
    setResult(total);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Number Adder</h1>
      <label htmlFor="Input">Enter numbers...</label> <br></br>
      <input
        value={value}
        type="text"
        placeholder="e.g 1,2,5...."
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => sum()}>Add</button>
      <p>Result: {result}</p>
    </form>
  );
}

export default Form;
