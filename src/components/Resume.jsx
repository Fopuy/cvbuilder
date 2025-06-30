export default function Resume({fullName}){
    return (
    <div className = "resume-container">
        <div className = "resume-layout">
            <div className = "personal-info">
                <h1 className = "resume-name"> {fullName}</h1>
            </div>
        </div>
    </div>
    )
}

/* 
                <div className = "contact-info">
                    {email && (
                        <div>
                            <i className="fa-solid fa-envelope" />
                            <span>{email}</span>
                        </div>
                    )}

                    {phoneNumber && (
                        <div>
                            <i className="fa-solid fa-phone" />
                            <span>{phoneNumber}</span>
                        </div>
                    )}

                    {address && (
                        <div>
                            <i className="fa-solid fa-location-dot" />
                            <span>{address}</span>
                        </div>
                    )}
                </div>
*/