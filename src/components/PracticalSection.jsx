import { useState } from "react";
import Input from "./Input";

function PracticalSection({ practicalSubmitHandler }) {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [fromYear, setFromYear] = useState(0);
  const [toYear, setToYear] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  function handleCompany(e) {
    setCompany(e.target.value);
  }

  function handlePosition(e) {
    setPosition(e.target.value);
  }

  function handleResponsibilities(e) {
    setResponsibilities(e.target.value);
  }

  function handleFromYear(e) {
    setFromYear(e.target.value);
  }

  function handleToYear(e) {
    setToYear(e.target.value);
  }

  return (
    <section>
      <h1>Practical Experience</h1>
      {!submitted && (
        <>
          <form
            id="practical"
            onSubmit={(e) => {
              practicalSubmitHandler(e);
              setSubmitted(true);
            }}
          >
            <Input
              title="company"
              type="text"
              value={company}
              onChange={handleCompany}
            />
            <Input
              title="position"
              type="text"
              value={position}
              onChange={handlePosition}
            />
            <Input
              title="responsibilities"
              type="text"
              value={responsibilities}
              onChange={handleResponsibilities}
            />
            <Input
              title="fromYear"
              type="number"
              value={fromYear}
              onChange={handleFromYear}
            />
            <Input
              title="toYear"
              type="number"
              value={toYear}
              onChange={handleToYear}
            />
          </form>
          <button type="submit" form="practical">
            Add Practical Experience
          </button>
        </>
      )}
      {submitted && (
        <button onClick={() => setSubmitted(false)}>
          Edit Practical Experience
        </button>
      )}
    </section>
  );
}

export default PracticalSection;
