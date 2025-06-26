import { useState } from "react";
import "./PersonalInfoForm.css";

export default function PersonalInfoForm({data, onChange}){
    const [localData, setLocalData] = useState(data);

    const handleChange = (e) => {
        const { name, value } = e.target;
        const updated = { ...localData, [name]: value };
        setLocalData(updated);
        onChange(updated);
    };

    return(
        <div className = "personal-info-container">
            <h2 className = "personal-info-title">Personal Information</h2>

            <div className = "personal-info-grid">
                <input
                    type = "text"
                    name = "fullName"
                    value = {localData.fullName}
                    onChange = {handleChange}
                    placeholder = "Full Name"
                    className = "personal-info-input"
                />
                <input
                    type = "email"
                    name = "email"
                    value = {localData.email}
                    onChange = {handleChange}
                    placeholder = "Email"
                    className = "personal-info-input"
                />
                <input
                    type = "tel"
                    name = "phone"
                    value = {localData.phone}
                    onChange = {handleChange}
                    placeholder = "Phone Number"
                    className = "personal-info-input"
                />
                <input
                    type = "text"
                    name = "address"
                    value={localData.address}
                    onChange={handleChange}
                    placeholder="Address"
                    className="personal-info-input"
                />
                <input
                    type ="text"
                    name="linkedin"
                    value={localData.linkedin}
                    onChange={handleChange}
                    placeholder="LinkedIn URL"
                    className="personal-info-input"
                />
                <input
                    type="text"
                    name="github"
                    value={localData.github}
                    onChange={handleChange}
                    placeholder="GitHub URL"
                    className="personal-info-input"
                />
            </div>
        </div>
    );
}