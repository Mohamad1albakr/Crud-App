import React,{Component,Fragment} from 'react'


class CourseList extends Component{
    state={
        Edit:false
    }

    //Toggle Function to change the State from False to True and the Oposite;
    toggleState=()=>{
        let Edit=this.state.Edit;
        this.setState({
            Edit:!Edit
        })};
//Edit the Course and Update
editCourse=(e)=>{
  e.preventDefault();
this.props.updateCourse(this.props.index,this.input.value)
  this.toggleState();
  
}


//Show all the Items on the List
    showMainList=()=>{
      
        return(
            <li>
            <span>{this.props.details.name}</span> 
            <button onClick={this.toggleState}>Edit</button>
            <button onClick={()=>this.props.deleteCourse(this.props.index)}>Delete</button>
         </li>
        )
    }
    //Show Edit Form only
    showEditList=()=>{
        return(
        <form onSubmit={this.editCourse}>
            <input type="text" ref={(value)=>{this.input=value}} defaultValue={this.props.details.name}/>
            <button>Update</button>
        </form>
        )
    }
    render(){
        let Edit = this.state.Edit;
        return(
            //if the State(Edit :false) showMainlist and if (Edit:true) showEditList
            <Fragment>
                
           {Edit ? this.showEditList() :this.showMainList() }
            </Fragment>
            
        )
    }
}
export default CourseList; 