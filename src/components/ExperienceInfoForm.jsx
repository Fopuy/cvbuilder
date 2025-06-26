import { useState } from "react";
import "./ExperienceInfoForm.css";

export default function ExperienceForm({ data, onChange }) {
  const [experienceList, setExperienceList] = useState(Array.isArray(data) ? data : []);

  const handleChange = (index, field, value) => {
    const updated = experienceList.map((entry, i) =>
      i === index ? { ...entry, [field]: value } : entry
    );
    setExperienceList(updated);
    onChange(updated);
  };

  const addEntry = () => {
    const newEntry = {
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      description: "",
    };
    const updated = [...experienceList, newEntry];
    setExperienceList(updated);
    onChange(updated);
  };

  const removeEntry = (index) => {
    const updated = experienceList.filter((_, i) => i !== index);
    setExperienceList(updated);
    onChange(updated);
  };

  return (
    <div className="experience-container">
      <h2 className="experience-title">Work Experience</h2>

      {experienceList.map((entry, index) => (
        <div className="experience-entry" key={index}>
          <input
            type="text"
            placeholder="Company"
            value={entry.company}
            onChange={(e) => handleChange(index, "company", e.target.value)}
            className="experience-input"
          />

          <input
            type="text"
            placeholder="Position"
            value={entry.position}
            onChange={(e) => handleChange(index, "position", e.target.value)}
            className="experience-input"
          />

          <input
            type="text"
            placeholder="Start Date"
            value={entry.startDate}
            onChange={(e) => handleChange(index, "startDate", e.target.value)}
            className="experience-input"
          />

          <input
            type="text"
            placeholder="End Date"
            value={entry.endDate}
            onChange={(e) => handleChange(index, "endDate", e.target.value)}
            className="experience-input"
          />

          <textarea
            placeholder="Description"
            value={entry.description}
            onChange={(e) => handleChange(index, "description", e.target.value)}
            className="experience-textarea"
          />

          <button onClick={() => removeEntry(index)} className="experience-remove-button">
            Remove
          </button>
        </div>
      ))}

      <button onClick={addEntry} className="experience-add-button">
        + Add Experience
      </button>
    </div>
  );
}
