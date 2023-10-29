import GeneralSection from "./components/GeneralSection";
import CV from "./components/CV";
import { useState } from "react";
import EducationSection from "./components/EducationSection";
import PracticalSection from "./components/PracticalSection";

function App() {
  const [data, setData] = useState({});

  function submitHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formJSON = Object.fromEntries(formData.entries());
    setData((prevData) => ({ ...prevData, ...formJSON }));
  }

  return (
    <>
      <GeneralSection generalSubmitHandler={submitHandler} />
      <EducationSection educationSubmitHandler={submitHandler} />
      <PracticalSection practicalSubmitHandler={submitHandler} />
      <CV {...data} />
    </>
  );
}

export default App;
