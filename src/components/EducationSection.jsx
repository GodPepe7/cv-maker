import { useState } from "react";
import Input from "./Input";

function EducationSection({ educationSubmitHandler }) {
  const [schoolName, setSchoolName] = useState("");
  const [studyTitle, setStudyTitle] = useState("");
  const [year, setYear] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  function handleSchoolName(e) {
    setSchoolName(e.target.value);
  }

  function handleStudyTitle(e) {
    setStudyTitle(e.target.value);
  }

  function handleYear(e) {
    setYear(e.target.value);
  }

  return (
    <section>
      <h1>Educational Experience</h1>
      {!submitted && (
        <>
          <form
            id="education"
            onSubmit={(e) => {
              educationSubmitHandler(e);
              setSubmitted(true);
            }}
          >
            <Input
              title="schoolName"
              type="text"
              value={schoolName}
              onChange={handleSchoolName}
            />
            <Input
              title="studyTitle"
              type="text"
              value={studyTitle}
              onChange={handleStudyTitle}
            />
            <Input
              title="year"
              type="number"
              value={year}
              onChange={handleYear}
            />
          </form>
          <button type="submit" form="education">
            Add Educational Experience
          </button>
        </>
      )}
      {submitted && (
        <button onClick={() => setSubmitted(false)}>
          Edit Educational Experience
        </button>
      )}
    </section>
  );
}

export default EducationSection;
