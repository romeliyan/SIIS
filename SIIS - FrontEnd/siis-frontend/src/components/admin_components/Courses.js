import React,{Component} from 'react'
import axios from 'axios';

import '../../App.css';
import {withAlert} from 'react-alert';
import { Input, FormGroup, Label, Modal, ModalHeader, ModalBody, ModalFooter, Table, Button } from 'reactstrap';

class Course extends Component{

    state={
        courses: [],
        lectureList:[],
        r:'',
        
        _id:'',
        name: '',
        lecture: '',
        code: '',
        enrollKey: ''
    }

    componentDidMount(){
        axios.get('http://localhost:3000/api/courses').then(
            res=>{

                this.setState(
                this.state.courses=res.data);
                console.log(this.state.courses)
            }
        )

        axios.get('http://localhost:3000/api/instructor').then(
            res=>{

                this.setState(
                this.state.lectureList=res.data,
                this.state.email=res.data.email);
                console.log(this.state.lectureList);
                
            }
        )
    }

    
    change=e=>{
        this.setState({
            [e.target.name]:e.target.value
        });
        

    }
    


    getemail = (lecturename) => {
        const selectedEmail = this.state.lectureList.find(x => x.firstName=== lecturename);
        this.setState({
           
            r:selectedEmail.email,
        })
        console.log(selectedEmail);
        console.log(selectedEmail.email);
        console.log(this.state.r);
        return selectedEmail.email
    }
  
    onClick=e=>{

        
        const course1={
            name:this.state.name,
            lecture:this.state.lecture,
            code:this.state.code,
            enrollKey:this.state.enrollKey


        }
        const course2={
            coursename:this.state.name,
            lecture:this.state.lecture,
        }
        const lecturename=this.state.lecture;

        const em=this.getemail(lecturename);
        console.log(em);

       
        console.log(course1);
        console.log(course2);
        axios.post('http://localhost:3000/api/courses',course1).then(
            res=>{
                let {courses}=this.state;
                courses.push(res.data);
                this._refreshCourses();
                console.log(this.state.name);
            });

            axios.post('http://localhost:3000/api/courseIns',course2).then(
            res=>{
                let {courses}=this.state;
                courses.push(res.data);
                this._refreshCourses();
                console.log(this.state.name);
            });

            //const udith='udith17038638@gmail.com';
            axios.get('http://localhost:3000/api/courses/'+em).then(
            res=>{

                console.log(this.state.lectureList.email)
            }
        )
    }
    editCourse( id,name, code,lecture,enrollKey) {

         
        this.setState({
            
          editCourseData: {id,  name, lecture,code,enrollKey},
          
        });
        console.log(this.state.editCourseData);
      }

      getExamination = (inputName) => {
        const selectedExam = this.state.courses.find(x => x.name === inputName);
        this.setState({
           
            _id:selectedExam._id,
            name: selectedExam.name,
            lecture: selectedExam.lecture,
            code: selectedExam.code,
            enrollKey: selectedExam.enrollKey

        })
    }

   
    deleteCourse(name) {
        axios.delete('http://localhost:3000/api/courses/' + name).then((response) => {
          this._refreshCourses();
        });
      }
      _refreshCourses() {
        axios.get('http://localhost:3000/api/courses').then((response) => {
          this.setState({
            courses: response.data
          })
        });
      }
    onClick2=e=>{
        const course1={
            
            name:this.state.name,
            lecture:this.state.lecture,
            code:this.state.code,
            enrollKey:this.state.enrollKey


        }

        const id={
            _id:this.state._id,
        }
        console.log(course1);
        axios.put('http://localhost:3000/api/courses/'+id._id,course1).then(
            res=>{
                let {courses}=this.state;
                courses.push(res.data);
                this._refreshCourses();
            });
    }

    render(){



        const {courses}=this.state;
        const courseList= courses.length?(

            courses.map(couse=>{
                return(
                    <tr key={couse._id}>        
                    <td>{couse.name}</td>
                    <td>{couse.code}</td>      
                    <td>{couse.lecture}</td>
                    <td>{couse.enrollKey}</td>
        
                <td>
          
          <Button style={{backgroundColor:"RED"}} size="sm" onClick={this.deleteCourse.bind(this, couse._id)}>Delete</Button>
          </td>
          <td>
          <Button style={{backgroundColor:"Dodgerblue"}}size="sm" className="mr-2" onClick={() => {this.getExamination(couse.name)}}>UPDATE</Button>
        </td>
      </tr>
                )
            })
        ):(
            <div>No Courses</div>
        );


        return(
            <div  className="Container" align="center">
            <form className="form-inline">
            <FormGroup>

            <label>Course Name</label>
                    <input 
                    name="name"
                    placeholder="Course Name"
                    value={this.state.name}
                    onChange={e=>this.change(e)}
                    type="text"/>
            <label>Lecturer Name</label><br/>
                    <select id="courseName"  value={this.state.lecture} name="lecture" className="form-control" onChange={e=>this.change(e)}>
                        {
                            this.state.lectureList.length ? (

                                this.state.lectureList.map(lecture => {

                                    return(
                                        <option id="courseName"  name="lecture"  onChange={e=>this.change(e)} key={lecture.email}> {lecture.firstName} </option>
                                        )
                                        })
                                    ) : (<option>No Courses Found</option>)
                        }
                    </select><br/>
             <label>Course Code</label>
                    <input 
                    name="code"
                    placeholder="Course Code"
                    value={this.state.code}
                    onChange={e=>this.change(e)}
                    type="text"/>
            <label>Enrollment Key</label>
                    <input 
                    name="enrollKey"
                    placeholder="enroll key"
                    value={this.state.enrollKey}
                    onChange={e=>this.change(e)}
                    type="text"/>

                   

                    <Button onClick={e=>this.onClick(e)}>ADD COURSE</Button>&nbsp;
                    <Button onClick={e=>this.onClick2(e)}>EDIT COURSE</Button>
                </FormGroup>
                </form>


                <div className="CourseSelection">
                <Table>
                    <thead>
                        <tr>
                
                            <th>Name</th>
                            <th>Code</th>
                            <th>Lecturer</th>
                            <th>Enrollment Key</th>
                        </tr>
                    </thead>

                    <tbody>
                        {courseList}
                    </tbody>
                </Table>


                
            </div>

            </div>
        )
    }
}

export default withAlert()(Course);