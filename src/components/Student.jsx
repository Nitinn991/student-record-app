function Student({ name, rollNo, course, image }) {
  return (
    <article className="student-card">
      <h2>{name}</h2>
      <img className="student-photo" src={image} alt={`${name} portrait`} />
      <p>ROLL NO:{rollNo}</p>
      <p>CLASS:{course}</p>
    </article>
  )
}

export default Student
