import React, {Component} from 'react';
import {withAlert} from 'react-alert';
import axios from 'axios';
import { Input, FormGroup, Label, Modal, ModalHeader, ModalBody, ModalFooter, Table, Button } from 'reactstrap';


class Course extends Component{
    state = {
        courses: [],
        courses2:[],
       
          name: '',
          lecture: '',
          code: '',
          enrollKey: '',
        
        editCourseData: {
          
            _id:'',
            name: '',
            lecture: '',
            code: '',
            enrollKey: ''
        },
        newCourseModal: false,
        editCourseModal: false
      }

      change=e=>{
        this.setState({
            [e.target.name]:e.target.value
        })

      }
      onClick=e=>{
          console.log(this.state);
        axios.post('http://localhost:3000/api/courses',this.state).then(
            res=>{
                let {courses}=this.state;
                courses.push(res.data);
            }
        )
      }


      updateCourse() {
        let {_id,name, lecture,code,enrollKey } = this.state.editCourseData;
    
        axios.put('http://localhost:4000/trains/' + _id, {
          name, lecture,code,enrollKey
        }).then((response) => {
          this._refreshCourses();
    
          this.setState({
            editCourseModal: false, editCourseData: {  name: '', lecture: '',code: '',enrollKey:'' }
          })
        });
      }
      editCourse( id,name, code,lecture,enrollKey) {

         
        this.setState({
            
          editCourseData: {id,  name, lecture,code,enrollKey},
          
        });
        console.log(this.state.editCourseData);
      }
      getCourse=e=>{
          localStorage.setItem("key",);
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

      componentDidMount(){
        axios.get('http://localhost:3000/api/courses').then(
            res=>{

                this.setState(
                this.state.courses=res.data);
                console.log(this.state.courses)
            }
        )
    }

    toggleEditCourseModal() {
        this.setState({
          editCourseModal: ! this.state.editCourseModal
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
          
          <Button color="danger" size="sm" onClick={this.deleteCourse.bind(this, couse._id)}>Delete</Button>
          <Button size="sm" className="mr-2" onClick={this.editCourse.bind(this,couse._id, couse.name, couse.code,couse.lecture,couse.enrollKey)}>Edit</Button>
        </td>
      </tr>
                )
            })
        ):(
            <div>No Courses</div>
        );





       


        
        return(

            <div>
                
                <div className="CourseSelection">
                <Table>
                    <thead>
                        <tr>
                
                            <th>Name</th>
                            <th>Lecturer</th>
                            <th>Code</th>
                            <th>Enrollment Key</th>
                        </tr>
                    </thead>

                    <tbody>
                        {courseList}
                    </tbody>
                </Table>


                
            </div>

            </div>
            
        );
        
    } 
}

export default withAlert()(Course);