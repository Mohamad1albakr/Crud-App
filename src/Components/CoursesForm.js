
import React from 'react'

const CourseForm =(props)=>{
    return(
        <form onSubmit={props.addCourse}>
            <input type='text' onChange={props.inputValue}value={props.current}/>
            <button type="submit">Add</button>
        </form>
    )
}
export default CourseForm;