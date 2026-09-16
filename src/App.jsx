import "./App.css";
import Course from "./components/Course";
import Footer from "./components/footer/Footer";
import Header from "./components/Header";

function App() {
  const articles = [
    {
      id: 1,
      title: "angular",
    },
    {
      id: 2,
      title: "react",
    },
    {
      id: 3,
      title: "vue",
    },
  ];
  return (
    <>
      <Header />
      <Course {...articles[0]} />
      <Course {...articles[1]} />
      <Course {...articles[2]} />
      <Footer />
    </>
  );
}

export default App;
