import React, {Component} from 'react';
import {withAlert} from 'react-alert';
import axios from 'axios';
import auth from '../../middleware/auth';
import jwtDecode from 'jwt-decode';

class Assignment extends Component{

    state = {
        courseList: [],
        name: '',
        date: '',
        marks: '',
        instructions: '',
        courseName: '',
        assignmentList: [],
        assignmentID: ''

    };

    refreshAssignments = () => {
        axios.get('http://localhost:3000/api/assignments').then((response) => {
          this.setState({
            assignmentList: response.data
          })
        });
    }

    componentWillMount() {

        const token = jwtDecode(auth.getToken());
        
        //Get the logged in instructor object
        axios.get('http://localhost:3000/api/instructor?email=' + token.email).then(res => {

            console.log( res.data[0].firstName + ' ' + res.data[0].lastName);
            
            axios.get('http://localhost:3000/api/courses?lecturer=' + res.data[0].firstName + ' ' + res.data[0].lastName).then(res => {             
                    
                    this.setState({
                        courseList: res.data
                    })
                }).catch(err => {
                    console.log(err);
                })
        }).catch(err => {
            console.log(err);
        })


        axios.get('http://localhost:3000/api/assignments').then(res => {
            this.setState({
                assignmentList: res.data
            })
        })
    }

    handleChange = (e) => {

        this.setState({
            [e.target.id]: e.target.value
        })

    }

    deleteAssignment = (assignmentID) => {

        console.log('Assignment ID: ' + assignmentID);
        axios.delete('http://localhost:3000/api/assignments/' + assignmentID).then(res => {
            this.props.alert.success('Assignment Deleted Successfully');
            this.refreshAssignments();

        }).catch(err => {
            this.props.alert.error(err.response.data);
        })
    }

    getAssignment = (inputName, assignmentIDs) => {
        const selectedAssignment = this.state.assignmentList.find(x => x.name === inputName);
        console.log('Assignment ID is: ' + assignmentIDs);
        this.setState({
           
            name: selectedAssignment.name,
            date: selectedAssignment.date,
            marks: selectedAssignment.marks,
            instructions: selectedAssignment.instructions,
            courseName: selectedAssignment.courseName,
            assignmentID: assignmentIDs

        })
    }

    handleUpdate = (e) => {
        e.preventDefault();

        const assignment = {
            name: this.state.name,
            instructions: this.state.instructions,
            dueDate: this.state.date,
            marks: this.state.marks,
            courseName: this.state.courseName,
        }

        console.log(this.state.assignmentID);

        axios.put('http://localhost:3000/api/assignments/' + this.state.assignmentID , assignment).then(res => {
            this.props.alert.success('Assignment Updated Successfully');

        }).catch(err => {
            this.props.alert.error(err.response.data);
        })

    }

    handleRegister = (e) => {

        e.preventDefault();

        const assignment = {
            name: this.state.name,
            instructions: this.state.instructions,
            dueDate: this.state.date,
            marks: this.state.marks,
            courseName: this.state.courseName
        }

        console.log(assignment);

        axios.post('http://localhost:3000/api/assignments', assignment).then(res => {
            this.props.alert.success('Assignment Added Successfully');

        }).catch(err => {
            this.props.alert.error(err.response.data);
        })
    }


    render(){
        
        return(
            <div className="container-fluid">

                <br/><br/>
                <div className="panel panel-default">
                    
                    <div className="panel-heading">
                        <h5> Publish New Assignments</h5>
                    </div>

                    <div className="panel-body">
                        <form>
                            <div className="form-row">
                                <div className ="form-group col-md-6">
                                    <label>Name</label>
                                    <input type="text" value={this.state.name} className="form-control" id="name" placeholder="Name" onChange={this.handleChange}/>
                                </div>

                                <div className ="form-group col-md-6">
                                    <label>Date</label>
                                    <input type="date" value={this.state.date} className="form-control" id="date" placeholder="Date" onChange={this.handleChange}/>
                                </div>

                            </div>

                            <div className="form-row">
                                <div className ="form-group col-md-6">
                                    <label>Marks</label>
                                    <input type="text" value={this.state.marks} className="form-control" id="marks" placeholder="Marks" onChange={this.handleChange}/>
                                </div>

                                <div className="form-group col-md-6">
                                    <label>Instructions</label>
                                    <input type="text" value={this.state.instructions} className="form-control" id="instructions" placeholder="Instructions" onChange={this.handleChange}/>
                                </div>
                            </div>


                            <div className="form-row">
                                
                                <div className ="form-group col-md-6">
                                    <label>Course Name</label>
                                    <select id="courseName" className="form-control" value={this.state.courseName} onChange={this.handleChange}>
                                        {
                                            this.state.courseList.length ? (

                                                this.state.courseList.map(course => {

                                                    return(
                                                        <option id="courseName" key={course.code}> {course.name} </option>
                                                    )
                                                })
                                            ) : (<option>No Courses Found</option>)
                                        }
                                    </select>
                                </div>

                                <div className="form-group col-md-6">
                                    
                                </div>


                            </div>

                            <div className="form-row">
                                
                                <div className ="form-group col-md-6">
                                    <button style={{backgroundColor: "RoyalBlue "}} className="btn btn-primary center" onClick={this.handleRegister}>Publish Assignment </button> &nbsp;&nbsp;&nbsp;
                                    
                                </div>

                                <div className="form-group col-md-6">
                                    <button style={{backgroundColor: "RoyalBlue "}} className="btn btn-primary center" onClick={this.handleUpdate}>Update Assignment </button>
                                </div>

                                
                            </div>

                            

                        </form>
                    </div>
                </div>


                <div className="panel panel-default">

                    <div className="panel-heading">
                        <h5>Currently Published Assignments</h5>
                    </div>

                    <div className="panel-body">
                        <div className="collection-item center">
                            <table>
                                <tbody>
                                    <tr>
                                        <th> Name </th>
                                        <th> Instructions </th>
                                        <th> Marks </th>
                                        <th> Course Name </th>
                                        <th> Due Date </th>
                                    </tr>

                                    {
                                        this.state.assignmentList.length ? (
                                            this.state.assignmentList.map(assignment => {

                                                return(
                                                    <tr key={assignment.name}>
                                                        <td>{assignment.name} </td>
                                                        <td>{assignment.instructions} </td>  
                                                        <td>{assignment.marks} </td>
                                                        <td>{assignment.courseName} </td>
                                                        <td>{assignment.dueDate} &nbsp;&nbsp; &nbsp;&nbsp;  </td>
                                                        <td><button style={{backgroundColor: "RoyalBlue"}} type="button" className="btn btn-warning" onClick={() => {this.getAssignment(assignment.name, assignment._id)}}>Update</button></td>
                                                        <td><button style={{backgroundColor: "Red"}} type="button" className="btn btn-danger" onClick={() => {this.deleteAssignment(assignment._id)}} >Delete</button></td>
                                                        
                                                    </tr>
                                                )
                                            })
                                        ) : (
                                            <tr><td>No Assignments Are Currently Published</td></tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>                   
 
                </div>
            </div>
        )
    } 
}

export default withAlert()(Assignment);