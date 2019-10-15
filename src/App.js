import React,{Component} from 'react';
import CourseList from './Components/CoursesList'
import CourseForm from './Components/CoursesForm'

import './App.css';

class App extends Component {

  state={
    courses:[
      {name:'HTML'},
      {name:'CSS'},
      {name:'PHP'}
    ],
  current:''
  }
  // Add the input Value from the FORM  to the state on Change Function
  inputValue=(e)=>{
 
      this.setState({
        current: e.target.value
          });

  
}

  //take the Value from the input (current ) to the courses in the State check if it is empty
addCourse = (e)=>{
e.preventDefault();
let courses=this.state.courses;
let current=this.state.current;
if(this.state.current===''){
  alert('please fill the inpute')
}
else{
  courses.push({name:current});
  this.setState({
    courses,
    current:''
  })
}



}
//DELETE one of the Courses in the List (this function in the CourseList)

deleteCourse=(index)=>{
  let courses=this.state.courses;
  courses.splice(index,1);
  this.setState({
    courses
  })
}
//update the current Item to new value onClick on the Update Button
updateCourse=(index,value)=>{
  
let courses=this.state.courses;
let course=courses[index];
course['name']=value;
this.setState({
  courses
})
  

}

  render(){
    //show the Courses in from the State to the Component and come back to the the APP
    let courses=this.state.courses;
    let length=courses.length;
   //check if there is no lenght so  no Items to show 
     let coursesList = length ?(
      courses.map((course,index)=>{
   
        return (
          <CourseList 
          details={course} 
          key={index}
          index={index}
          deleteCourse={this.deleteCourse}
          updateCourse={this.updateCourse}
          courses={this.state.courses}
          />
        )
  
    

    })
    )
    //Else 
   :(<h2>There is no item to show</h2>)
  
      
  
    
    

 
  return (
    <section className='App'>
     <h2>Add Course</h2>
<CourseForm inputValue={this.inputValue} addCourse={this.addCourse}
current={this.state.current}/>

<ul>{coursesList}</ul>
    </section>
  
  )
}
}
export default App;
