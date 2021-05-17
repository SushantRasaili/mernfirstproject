import React from 'react';

const Input =(props) => {
return (
<input className="form-control" type="text" onChange={props.change} value={props.value} name={props.name} />
);

}

export default Input;