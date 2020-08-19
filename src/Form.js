import React, { useState } from 'react';
import fire from './fire.js';

function Form({title,fields}){
    const initialFields = {};
    fields.forEach(fields => initialFields[fields]="Pickachu");
    const [stateFields ,setFields] = useState(initialFields);
    const backuptitle="backuptitle";
    title=title || backuptitle;
    return(       
        <div>
            <h1 style={{color: "red"}}>{ title }</h1>
            <form onSubmit={ event=> {
                event.preventDefault();
                console.log(stateFields);
                fire.database().ref('pokemon').push(stateFields);

            }}
            >

                
                {fields.map(fields=>(
                 <span>
                    <label htmlFor={fields}>
                    {fields}
                    </label>
                    <input
                    type="text"
                    id={fields}
                    name={fields}
                    onChange={event=>{
                    const {name, value}=event.target;
                    setFields({...stateFields,[name]:value});
                    }}
                    value={stateFields[fields]}
                    />
                 </span>       

                ))}  
            <input type='submit' />
            </form>
            <p>{ stateFields.name}</p>        
        </div>
    );
}
export default Form;