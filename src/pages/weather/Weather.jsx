import { useState } from "react";
import Button from "../../components/button/Button";

export default function Weather() {
  const [counter, setCounter] = useState(10);
  const changeCount = (state) => {
    if (state == "add") {
      setCounter(counter + 1);
    } else {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <div
        className={`p-8 flex flex-col gap-5 ${counter > 15 ? "bg-red-100" : "bg-blue-100"}`}
      >
        <h1>{counter}C</h1>
        <div className="flex gap-5 justify-center">
          <Button
            title="Increase"
            colorClass="blue"
            clickHandler={() => {
              changeCount("add");
            }}
          ></Button>
          <Button
            title="Decrease"
            colorClass="red"
            clickHandler={() => {
              changeCount("minus");
            }}
          ></Button>
        </div>
      </div>
    </>
  );
}
