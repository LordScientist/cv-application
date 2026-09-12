import { useState } from "react"
import '../styles/GeneralInfo.css'

function GeneralInfo({data,onChange,onComplete})
    {
        const [errors,setErrors] = useState({})

        function validate(data)
            {
                let newErrors = {}
                if(data.name.trim() == "")
                    {
                        newErrors.name = "Please Enter your name";
                    }
                
                if(data.email.trim() == "")
                        {
                            newErrors.email = "Please enter your email";
                        }
                
                if(data.phone.trim() == "")
                    {
                        newErrors.phone = "Please enter your phone number";
                    }

                

                return newErrors;
                
            }

        function handleSubmit()
            {
                let newErrors = validate(data)
                setErrors(newErrors);
                if (Object.keys(newErrors).length == 0)
                    {
                        setIsEditing(false);
                        onComplete('general',true)
                    }
            }

        const [isEditing,setIsEditing] = useState(true)
        return(
                <>
                    {isEditing?
                    <>
                        <div className="general-field">
                            <h2>Personal Information</h2>
                                <div className="field">
                                    <label htmlFor="name">Full Name</label>
                                    <input className="input" id="name" name ="name"  value={data.name} onChange={(e) => onChange('general',e)} placeholder="Enter your name"/>
                                    {errors.name && <p>{errors.name}</p>}
                                </div>

                                <div className="field">
                                    <label htmlFor="email">Personal Email</label>
                                    <input className="input" id="email" name="email" value={data.email} onChange={(e) => onChange('general',e)} placeholder="Enter your email" />
                                    {errors.email && <p>{errors.email}</p>}
                                </div>

                                <div className="field">
                                    <label htmlFor="phone">Active Phone Number</label>
                                    <input className="input" id="phone" name="phone" value={data.phone} onChange={(e) =>onChange('general',e)} placeholder="Enter your mobile Number" />
                                    {errors.phone && <p>{errors.phone}</p>}
                                </div>
                            <div className="submission">
                                <button onClick={() => {handleSubmit()}} className="submit">Submit</button>
                            </div>
                        </div>
                    </>:
                    <>
                    <div className="general-field">
                        <p>Name : {data.name}</p>
                        <p>Email: {data.email}</p>
                        <p>Phone: {data.phone}</p>
                        <p>All areas successfully filled,please proceed</p>
                        <div>
                        <button onClick={() =>{setIsEditing(true);onComplete('general',false)}} className="edit">Edit</button>
                        </div>
                    </div>
                    </>
                    }
                    
                        
                    
                </>
            );
    }

export default GeneralInfo;