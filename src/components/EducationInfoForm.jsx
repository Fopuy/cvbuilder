import { useState } from 'react';
import "./EducationInfoForm.css"

export default function EducationInfoForm({data, onChange}){
    const [educationList, setEducationList] = useState(data);

    const handleChange = (index, field, value) => {
        const updatedList = educationList.map((entry, i) => 
        i === index ? { ...entry, [field]: value} : entry
        );
        setEducationList(updatedList);
        onChange(updatedList);
    };

    const addEntry = () => {
        const newEntry = {
            school: "",
            degree: "",
            startDate: "",
            endDate: "",
            description: "",
        };
        const updatedList = [...educationList, newEntry];
        setEducationList(updatedList);
        onChange(updatedList);
    };

    const removeEntry = (index) => {
        const updatedList = educationList.filter((_, i) => i !== index);
        setEducationList(updatedList);
        onChange(updatedList);
    };

    return (
        <div className = "education-container">
            <h2 className = "education-title"></h2>

            {educationList.map((entry, index) => (
                <div className = "education-entry" key={index}>
                    <input 
                        type = "text"
                        placeholder = "School"
                        value = {entry.school}
                        onChange={(e) => handleChange(index, "school", e.target.value)}
                        className = "education-input"
                    />

                    <input
                        type = "text"
                        placeholder = "Degree"
                        value = {entry.degree}
                        onChange = {(e) => handleChange(index, "degree", e.target.value)}
                        className = "education-input"
                    />

                    <input
                        type="text"
                        placeholder="Start Date"
                        value={entry.startDate}
                        onChange={(e) => handleChange(index, "startDate", e.target.value)}
                        className="education-input"
                    />

                    <input
                        type="text"
                        placeholder="End Date"
                        value={entry.endDate}
                        onChange={(e) => handleChange(index, "endDate", e.target.value)}
                        className="education-input"
                    />

                    <textarea
                        placeholder="Description"
                        value={entry.description}
                        onChange={(e) => handleChange(index, "description", e.target.value)}
                        className="education-textarea"
                    />

                    <button onClick={() => removeEntry(index)} className="education-remove-button">
                        Remove
                    </button>
                </div>
            ))};

            <button onClick={addEntry} className="education-add-button">
                + Add Education
            </button>
        </div>
    );
};