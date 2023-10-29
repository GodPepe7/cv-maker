function CV({
  name,
  email,
  phone,
  schoolName,
  studyTitle,
  year,
  company,
  position,
  responsibilities,
  fromYear,
  toYear,
}) {
  return (
    <>
      <h1>General Information</h1>
      <p>Name: {name}</p>
      <p>E-Mail: {email}</p>
      <p>Phone Number: {phone}</p>
      <h1>Educational Experience</h1>
      <p>School: {schoolName}</p>
      <p>Title of Study: {studyTitle}</p>
      <p>Year: {year}</p>
      <h1>Practical Experience</h1>
      <p>Company: {company}</p>
      <p>Position of Study: {position}</p>
      <p>Main Responsibilities: {responsibilities}</p>
      <p>From Year: {fromYear}</p>
      <p>To Year: {toYear}</p>
    </>
  );
}

export default CV;
