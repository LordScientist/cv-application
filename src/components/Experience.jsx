import { useState } from "react"
import '../styles/Experience.css'

function Experience({data,onChange,onComplete}){
const [errors,setErrors] = useState({})

        function validate(data)
            {
                let newErrors = {}
                if(data.company.trim() == "")
                    {
                        newErrors.company = "Please Enter your Company of work";
                    }

                if (data.position.trim() == "")
                        {
                            newErrors.position = "Please Enter your position";
                        }
                
                if(data.responsibility.trim() == "")
                        {
                            newErrors.responsibility = "Please enter your role or responsibility";
                        }
                
                if(data.yearsOfExperience.trim() == "")
                    {
                        newErrors.yearsOfExperience= "Please enter your years of experience";
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
                        onComplete('experience',true)
                    }
            }

        const [isEditing,setIsEditing] = useState(true)
        return(
                <>
                    {isEditing?
                    <>
                        <div className="experience-field">
                            <h2>Industrial Experience</h2>
                            <div className="field">
                                <label htmlFor="company">Name of Company</label>
                                <input className="input" id="company" name ="company"  value={data.company} onChange={(e)=>{onChange('experience',e)}} placeholder="Name of Company"/>
                                {errors.company && <p>{errors.company}</p>}
                            </div>

                            <div className="field">
                                <label htmlFor="position">Job Role</label>
                                <input className="input" id="position" name="position" value={data.position} onChange={(e)=>onChange('experience',e)} placeholder="Your position(s) held" />
                                {errors.position && <p>{errors.position}</p>}
                            </div>

                            <div className="field">
                                <label htmlFor="responsibility">Assigned Roles</label>
                                <input className="input" name="responsibility" value={data.responsibility} onChange={(e)=> onChange('experience',e)} placeholder="What was your assigned role/responsibility" />
                                {errors.responsibility && <p>{errors.responsibility}</p>}
                            </div>

                            <div className="field">
                                <label htmlFor="yearsOfExperience">Years of Experience</label>
                                <input className="input" id="yearsOfExperience" name="yearsOfExperience" value={data.yearsOfExperience} onChange={(e)=>onChange('experience',e)} placeholder="How many years of experience" />
                                {errors.yearsOfExperience && <p>{errors.yearsOfExperience}</p>}
                            </div>
                            <div>
                                <button onClick={() => {handleSubmit()}} className="submit">Submit</button>
                            </div>
                        </div>
                    </>:
                    <>
                    <div className="experience-field">
                        <div>
                            <p>Name of company : {data.company}</p>
                            <p>Position held: {data.position}</p>
                            <p>Responsibilities: {data.responsibility}</p>
                            <p>Years of Experience : {data.yearsOfExperience} years</p>
                            <p>All areas successfully filled,please proceed</p>
                        </div>
                        <div>
                            <button onClick={() =>{setIsEditing(true);onComplete('experience',false)}} className="edit">Edit</button>
                        </div>
                    </div>
                    </>
                    }
                    
                        
                    
                </>
            );
    }


export default Experience;