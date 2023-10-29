import { useState } from "react";
import Input from "./Input";

function GeneralSection({ generalSubmitHandler }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleName(e) {
    setName(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePhone(e) {
    setPhone(e.target.value);
  }

  return (
    <section>
      <h1>General Information</h1>
      {!submitted && (
        <>
          <form
            id="general"
            onSubmit={(e) => {
              generalSubmitHandler(e);
              setSubmitted(true);
            }}
          >
            <Input
              title="name"
              type="text"
              value={name}
              onChange={handleName}
            />
            <Input
              title="email"
              type="email"
              value={email}
              onChange={handleEmail}
            />
            <Input
              title="phone"
              type="tel"
              value={phone}
              onChange={handlePhone}
            />
          </form>
          <button type="submit" form="general">
            Add General Information
          </button>
        </>
      )}
      {submitted && (
        <button onClick={() => setSubmitted(false)}>
          Edit General Information
        </button>
      )}
    </section>
  );
}

export default GeneralSection;
