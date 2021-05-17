import React, { useState } from 'react';
import Input from './Input';
import axios from 'axios';

const Create =() => {

    const [forms,setform] = useState({
        title:"",
        story:"",
        name:"",
        genre:"", 
    });
    const [fulldtl,setfulldtl] = useState(
        {

        }
    );

    const handlechange =(event) => {

        const {name, value} = event.target;
    
      setform(prevValue => {
            return {
                ...prevValue,
                [name]: value
    
            }
      })
    }

    const handleclick =(event) => {
        event.preventDefault();
   setfulldtl(forms);

   const myuser = {
       ...fulldtl
   }

console.log(myuser);
axios
   .post("http://localhost:5000/create",myuser , {   headers: {     'Content-Type': 'application/json',   } })
   .then(res => console.log(res.data))
   .catch((error) => console.log( error.response.request._response ) );

    }
    // JSON.stringify
   
   
//    window.location='/Create';
 



    return(
        <div className="container">
        <form method="POST">
        <label className="col-sm-2 col-form-label">Title</label><br />
       <Input change={handlechange} value={forms.title} name="title" />
        <div className="form-group">
    <label for="exampleFormControlTextarea1">Story</label>
    <textarea className="form-control" onChange={handlechange} value={forms.story} name="story" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
        <label className="col-sm-2 col-form-label">Name of author</label><br />
        <Input change={handlechange} value={forms.name} name="name" />
        <label className="col-sm-2 col-form-label">Genre</label><br />
        <Input change={handlechange} value={forms.genre} name="genre" /><br />
        <button type="submit" onClick={handleclick}  className="btn btn-lg btn-success">Submit</button>
        </form>
<h1 className="homenav">{fulldtl.title}</h1>
</div>
    );


}

export default Create;