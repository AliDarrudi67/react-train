import { useState } from "react";
import "./App.css";
import AuthForm from "./pages/auth-form/AuthForm";
import ToDoList from "./pages/todo-list/ToDoList";
import Weather from "./pages/weather/Weather";

function App() {
  const [project, setProject] = useState("todo-list");
  return (
    <>
      <ul className="flex p-5 rounded items-center justify-center gap-5">
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

        <li
          className={`border px-3 py-1 rounded cursor-pointer ${project == "todo-list" ? "bg-blue-100" : ""}`}
        >
          <a
            onClick={() => {
              setProject("todo-list");
            }}
          >
            پروژه ToDoList
          </a>
        </li>
      </ul>
      {project == "form" && <AuthForm />}
      {project == "weather" && <Weather />}
      {project == "todo-list" && <ToDoList />}
    </>
  );
}

export default App;
