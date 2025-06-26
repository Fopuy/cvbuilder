import "./CVPreview.css";

export default function CVPreview({ personalInfo, education, experience }) {
  return (
    <div className="cv-preview-container">
      <header className="cv-header">
        <h1>{personalInfo.fullName}</h1>
        <p>{personalInfo.email} | {personalInfo.phone} | {personalInfo.linkedin} | {personalInfo.github}</p>
        <p>{personalInfo.address}</p>
      </header>

      <section className="cv-section">
        <h2>Education</h2>
        {education.map((edu, index) => (
          <div key={index} className="cv-entry">
            <strong>{edu.school}</strong> — {edu.degree}<br/>
            <span>{edu.startDate} - {edu.endDate}</span>
            <p>{edu.description}</p>
          </div>
        ))}
      </section>

      <section className="cv-section">
        <h2>Experience</h2>
        {experience.map((exp, index) => (
          <div key={index} className="cv-entry">
            <strong>{exp.company}</strong> — {exp.position}<br/>
            <span>{exp.startDate} - {exp.endDate}</span>
            <p>{exp.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
