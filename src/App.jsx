import GeneralInfo from './components/GeneralInfo'
import Education from './components/Education'
import Experience from './components/Experience'
import Preview from './components/Preview'
import { useState  } from 'react'
import './styles/App.css'

function App() {
  // This is my actual storage area that get exposed to the other components
  const [formData,setFormData] = useState(
    {general:{name:'',email:'',phone:''},
    education:{institution:'',titleOfStudy:'',duration:''},
    experience:{company:'',position:'',responsibility:'',yearsOfExperience:''}}
  )

  const [completed,setCompleted] = useState(
    {
      general : false,
      education : false,
      experience : false
    })

  const [showPreview,setShowPreview] = useState(false)

function handlePreview()
    {
      setShowPreview(true)
    }

    function handleComplete(section,status)
      {
        setCompleted(
          {
            ...completed,[section] : status
          }
        )
      }

  function handleChange(section,e)
    {
    // This will spread formData,then resolve to the right section based on the nout given by the component and set that key to its corresponding value
      setFormData({
        ...formData,
        [section]:{
          ...formData[section],[e.target.name] : e.target.value
        }
        
      })
    }


  return (
    <>
    <h2>Welcome to the CV Creator </h2>
    <footer className="footer">
        <p>© Handiworks of LordScientist</p>
    </footer>
    <div className='page'>
      <div className={showPreview ? 'form hide-on-mobile' : 'form'}>
        <div>
            <GeneralInfo  data = {formData.general} onChange ={handleChange} onComplete={handleComplete}/>
            <Education data = {formData.education} onChange ={handleChange} onComplete={handleComplete} />
            <Experience data = {formData.experience} onChange ={handleChange} onComplete={handleComplete} />
            <div className='CV-holder'>
              {completed.general && completed.education && completed.experience && (<button onClick={handlePreview} className='CV'>Create CV</button>)}
        </div>
      </div>
    </div>
          {showPreview && (
        <div className="displayPreview">
          <Preview data={formData} />
        </div>
)}
    <div>
      <button className='back' onClick={()=>{setShowPreview(false)}}>Back to form</button>
    </div>
      </div>
    </>
  )
}

export default App
