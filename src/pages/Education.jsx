const education = [
  {
    year: '2020 — 2024',
    title: 'Bachelor of Computer Applications',
    school: 'Poornima College Of Engineering'
  },
  {
    year: '2018 — 2020',
    title: 'Higher Secondary Education',
    school: '+2 High School Narkatiganj'
  },
  {
    year: '2018',
    title: 'Secondary School',
    school: 'High School Narkatiganj'
  }
];

export default function Education() {
  return (
    <section className="page-section education-page">
      <div className="page-intro">
        <p className="eyebrow">
          03 / Education <span>↘</span>
        </p>

        <h1>
          Always learning.
          <br />
          <em>Always shipping.</em>
        </h1>

        <p>
          My foundation in computer science keeps me curious, while building
          real products keeps the learning practical.
        </p>
      </div>

      <div className="timeline">
        {education.map((item) => (
          <article key={`${item.year}-${item.title}`}>
            <span>{item.year}</span>

            <div>
              <h2>{item.title}</h2>
              <p>{item.school}</p>
            </div>

            <b>↗</b>
          </article>
        ))}
      </div>

      <div className="education-bottom">
        <div className="learning-note">
          <span>Currently exploring</span>
          <strong>
            System design, product strategy, and accessible interaction.
          </strong>
        </div>

        <div className="coursework">
          <p className="eyebrow">Core coursework</p>
          <p>
            Data structures · Database management · Web technologies · Software
            engineering · Computer networks · Object-oriented programming
          </p>
        </div>
      </div>
    </section>
  );
}