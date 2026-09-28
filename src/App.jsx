import { useState } from "react";
import "./App.css";
import AuthForm from "./pages/auth-form/AuthForm";
import Weather from "./pages/weather/Weather";

function App() {
  const [project, setProject] = useState("");
  return (
    <>
      <ul className="flex p-2 rounded items-center justify-center gap-5">
        <li
          className={`border px-3 py-1 rounded cursor-pointer ${project == "form" ? "bg-blue-100" : ""}`}
        >
          <a
            onClick={() => {
              setProject("form");
            }}
          >
            پروژه فرم
          </a>
        </li>
        <li
          className={`border px-3 py-1 rounded cursor-pointer ${project == "weather" ? "bg-blue-100" : ""}`}
        >
          <a
            onClick={() => {
              setProject("weather");
            }}
          >
            پروژه اب و هوا
          </a>
        </li>
      </ul>
      {project == "form" && <AuthForm />}
      {project == "weather" && <Weather />}
    </>
  );
}

export default App;
