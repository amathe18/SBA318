import { useState } from "react";



  export default function Form(props) {
    console.log(props);
    
    const [formData, setFormData] = useState({searchterm:''})
    const handleChange =(event)=>{
      setFormData({...formData,[event.target.name]:event.target.value})
    }
    const handleSubmit =(event)=>{
      event.preventDefault()
    props.exercisesearch(formData.searchterm)
    }
    return (
      <div>
        <form onSubmit={handleSubmit}>
          
          <input type="text" name="searchterm" value={formData.searchterm} onChange={handleChange} />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }