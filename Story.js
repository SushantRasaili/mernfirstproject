import React from 'react';
import axios from 'axios';

const Story =() => {
    return (
        axios.get('http://localhost:5000/User/', {headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }})
        .then(res => console.log(res.data.map(user=>user.title)))
        .catch(err => console.log(err))

/* <h1 className="homenav">This is the story page</h1> */
    );


}

export default Story;