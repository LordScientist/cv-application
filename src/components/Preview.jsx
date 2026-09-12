import '../styles/Preview.css'

function Preview({data})
    {
        const {name,email,phone} = data.general;
        const {institution,titleOfStudy,duration} = data.education;
        const {company,position,responsibility,yearsOfExperience} = data.experience;

        return(
            <>
                <div className='preview-field'>
                    <h1>Professional CV</h1>
                    <div>
                        <h3>Personal Information</h3>
                    I'm {name}, a dedicated and detail-oriented professional presenting this curriculum vitae to highlight my academic journey and hands-on experience. Throughout my career, I have consistently sought opportunities to grow, contribute meaningfully, and deliver value in every role I've undertaken. For any inquiries regarding my qualifications, availability, or potential collaboration, I can be reached directly via email at {email}, or alternatively by phone at {phone}. I welcome the opportunity to discuss how my background aligns with your needs.
                    </div>

                    <div>
                        <h3>Educational background</h3>
                    My academic foundation was built at {institution}, where I pursued a program in {titleOfStudy} over a period of {duration}.Throughout my studies, I engaged deeply with coursework, projects, and collaborative work that sharpened my analytical thinking and prepared me for real-world challenges in my field. The knowledge and discipline gained during this time continue to inform how I approach new problems today.

                    </div>

                    <div>
                        <h3>Industrial Experience</h3>
                    In a professional capacity, I served as a {position} at {company}, a role I held for {yearsOfExperience}. During this time, my responsibilities centered primarily around {responsibility}, a task I approached with diligence, attention to detail, and a genuine commitment to excellence. This experience allowed me to apply my academic training in a real-world setting, collaborate with colleagues toward shared goals, and develop a stronger sense of accountability and initiative.
                    </div>
                </div>
            </>
        )
    }


export default Preview;