import { useState } from "react"
import "../styles/Education.css"

function Education({data,onChange,onComplete}){
const [errors,setErrors] = useState({})

        function validate(data)
            {
                let newErrors = {}
                if(data.institution.trim() == "")
                    {
                        newErrors.institution = "Please Enter your Institution";
                    }
                
                if(data.titleOfStudy.trim() == "")
                        {
                            newErrors.titleOfStudy = "Please enter your Programme of study or studied";
                        }
                
                if(data.duration.trim() == "")
                    {
                        newErrors.duration = "Please enter the duration of studies";
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
                        onComplete('education',true)
                    }
            }

        const [isEditing,setIsEditing] = useState(true)
        return(
                <>
                    {isEditing?
                    <>
                        <div className="education-field">
                            <h2>Educational Background</h2>
                            <div className="field">
                                <label htmlFor="institution">Name of Institution</label>
                                <input className="input" id="institution" name ="institution"  value={data.institution} onChange={(e)=>onChange('education',e)} placeholder="Name of Institution"/>
                                {errors.institution && <p className="error">{errors.institution}</p>}
                            </div>

                            <div className="field">
                                <label htmlFor="titleOfStudy">Programme of Study</label>
                                <input className="input" id="titleOfStudy" name="titleOfStudy" value={data.titleOfStudy} onChange={(e)=> onChange('education',e)} placeholder="Enter the title of your Studies" />
                                {errors.titleOfStudy && <p className="error" >{errors.titleOfStudy}</p>}
                            </div>    
                            
                            <div className="field">
                                <label htmlFor="duration">Duration of Studies</label>
                                <input className="input" id="duration" name="duration" value={data.duration} onChange={(e)=> onChange('education',e)} placeholder="Duration of Studies" />
                                {errors.duration && <p className="error">{errors.duration}</p>}
                            </div>
                            <div className="submission">
                                <button onClick={() => {handleSubmit()}} className="submit">Submit</button>
                            </div>
                        </div>
                    </>:
                    <>
                    <div className="education-field">
                        <div>
                            <p>Name of Institution : {data.institution}</p>
                            <p>Title of Study: {data.titleOfStudy}</p>
                            <p>Duration of Studies: {data.duration} years</p>
                            <p>All areas successfully filled,please proceed</p>
                        </div>
                        <div>
                            <button onClick={() =>{setIsEditing(true);onComplete('education',false)}} className="edit">Edit</button>
                        </div>
                    </div>
                    </>
                    }
                    
                        
                    
                </>
            );
    }


export default Education;