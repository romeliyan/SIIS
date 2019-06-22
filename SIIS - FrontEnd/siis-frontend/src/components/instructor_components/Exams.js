import React, {Component} from 'react';
import {withAlert} from 'react-alert';
import axios from 'axios';

class Exam extends Component{

    state = {
        courseList: [],
        name: '',
        date: '',
        marks: '',
        instructions: '',
        courseName: '',
        examinationHall: '',
        examList: [],
        examID: ''

    };

    refreshExams = () => {
        axios.get('http://localhost:3000/api/exams').then((response) => {
          this.setState({
            examList: response.data
          })
        });
    }

    componentWillMount() {
        axios
          .get("http://localhost:3000/api/courses")
          .then(res => {
            this.setState({
                courseList: res.data
            })
          })
          .catch(err => {
            console.log(err);
          });

        axios.get('http://localhost:3000/api/exams').then(res => {
            this.setState({
                examList: res.data
            })
        })
    }

    handleChange = (e) => {

        this.setState({
            [e.target.id]: e.target.value
        })

    }

    deleteExam = (emailID) => {

        axios.delete('http://localhost:3000/api/exams/' + emailID).then(res => {
            this.props.alert.success('Examination Deleted Successfully');
            this.refreshExams();

        }).catch(err => {
            this.props.alert.error(err.response.data);
        })
    }

    getExamination = (inputName, examIDs) => {
        const selectedExam = this.state.examList.find(x => x.name === inputName);
        console.log('Exam ID is: ' + examIDs);
        this.setState({
           
            name: selectedExam.name,
            date: selectedExam.date,
            marks: selectedExam.marks,
            instructions: selectedExam.instructions,
            courseName: selectedExam.courseName,
            examinationHall: selectedExam.examinationHall,
            examID: examIDs

        })
    }

    handleUpdate = (e) => {
        e.preventDefault();

        const exam = {
            name: this.state.name,
            instructions: this.state.instructions,
            date: this.state.date,
            marks: this.state.marks,
            courseName: this.state.courseName,
            examinationHall: this.state.examinationHall
        }

        console.log(this.state.examID);

        axios.put('http://localhost:3000/api/exams/' + this.state.examID , exam).then(res => {
            this.props.alert.success('Examination Updated Successfully');

        }).catch(err => {
            this.props.alert.error(err.response.data);
        })

    }

    handleRegister = (e) => {

        e.preventDefault();

        const exam = {
            name: this.state.name,
            instructions: this.state.instructions,
            date: this.state.date,
            marks: this.state.marks,
            courseName: this.state.courseName,
            examinationHall: this.state.examinationHall
        }

        axios.post('http://localhost:3000/api/exams', exam).then(res => {
            this.props.alert.success('Examination Registered Successfully');

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
                        <h5> Register Examinations</h5>
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

                                <div className ="form-group col-md-6">
                                    <label>Examination Hall</label>
                                    <input type="text" value={this.state.examinationHall} className="form-control" id="examinationHall" placeholder="Examination Hall" onChange={this.handleChange}/>
                                </div>
                            </div>

                            <div className="form-row"  style={{marginLeft:"0cm", marginRight: "auto"}}>
                                
                                <div className ="form-group col-md-6">
                                    <button style={{backgroundColor: "RoyalBlue "}} className="btn btn-primary center" onClick={this.handleRegister}>Register Examination </button> &nbsp;&nbsp;
                                    <button style={{backgroundColor: "RoyalBlue "}} className="btn btn-primary center" onClick={this.handleUpdate}>Update Examination </button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>


                <div className="panel panel-default">

                    <div className="panel-heading">
                        <h5>Currently Available Examinations</h5>
                    </div>

                    <div className="panel-body">
                        <div className="collection-item center">
                            <table>
                                <tbody>
                                    <tr>
                                        <th> Name </th>
                                        <th> Instructions </th>
                                        <th> Examination Hall </th>
                                        <th> Marks </th>
                                        <th> Course Name </th>
                                        <th> Date </th>
                                    </tr>

                                    {
                                        this.state.examList.length ? (
                                            this.state.examList.map(exam => {

                                                return(
                                                    <tr key={exam.name}>
                                                        <td>{exam.name} </td>
                                                        <td>{exam.instructions} </td>  
                                                        <td>{exam.examinationHall} </td>
                                                        <td>{exam.marks} </td>
                                                        <td>{exam.courseName} </td>
                                                        <td>{exam.date} &nbsp;&nbsp; &nbsp;&nbsp;  </td>
                                                        <td><button style={{backgroundColor: "RoyalBlue"}} type="button" className="btn btn-warning" onClick={() => {this.getExamination(exam.name, exam._id)}}>Update</button></td>
                                                        <td><button style={{backgroundColor: "Red"}} type="button" className="btn btn-danger" onClick={() => {this.deleteExam(exam._id)}} >Delete</button></td>
                                                        
                                                    </tr>
                                                )
                                            })
                                        ) : (
                                            <tr><td>No Examinations Are Currently Registered</td></tr>
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

export default withAlert()(Exam);