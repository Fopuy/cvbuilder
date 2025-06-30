export default function PersonalDetails({ fullName, email, phoneNumber, address, onChange}){

return (
<div className = "personal-details">
<h2 className = "personal-details-title">Personal Details</h2>
    <form className = "personal-details-form">
    <div className="input-group">
        <input
            type="text"
            id = "full-name"
            placeholder = "Full Name"
            value = {fullName}
            onChange = {onChange}
            data-key = "fullName"
        />
        <input
            type = "text"
            id="email"
            placeholder="Enter Email"
            value={email}
            onChange={onChange}
            data-key="email"
            //recommended
        />
        <input
            type="tel"
            id="phone-number"
            placeholder="Enter Phone Number"
            value={phoneNumber}
            onChange={onChange}
            data-key="phoneNumber"
            //recommended
        />
        <input
            type="text"
            id="address"
            placeholder="City, Country"
            value = {address}
            onChange = {onChange}
            data-key = "address"
            //recommended
        />
    </div>
    </form>

</div>)}