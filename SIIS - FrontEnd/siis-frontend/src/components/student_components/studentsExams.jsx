import React, { Component } from "react";
import { withAlert } from "react-alert";
import axios from "axios";

class Exam extends Component {
  state = {
    courseList: [],
    name: null,
    date: null,
    marks: null,
    instructions: null,
    courseName: null,
    examinationHall: null,
    examList: []
  };

  componentWillMount() {
    axios
      .get("http://localhost:3000/api/courses")
      .then(res => {
        this.setState({
          courseList: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });

    axios.get("http://localhost:3000/api/exams").then(res => {
      this.setState({
        examList: res.data
      });
    });
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleRegister = e => {
    e.preventDefault();

    const exam = {
      name: this.state.name,
      instructions: this.state.instructions,
      date: this.state.date,
      marks: this.state.marks,
      courseName: this.state.courseName,
      examinationHall: this.state.examinationHall
    };

    axios
      .post("http://localhost:3000/api/exams", exam)
      .then(res => {
        this.props.alert.success("Examination Registered Successfully");
      })
      .catch(err => {
        this.props.alert.error(err.response.data);
      });
  };

  render() {
    return (
      <div>
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
                    <th> Date </th>
                    <th> Marks </th>
                    <th> Course Name </th>
                    <th> Examination Hall </th>
                  </tr>

                  {this.state.examList.length ? (
                    this.state.examList.map(exam => {
                      return (
                        <tr key={exam.name}>
                          <td>{exam.name} </td>
                          <td>{exam.instructions} </td>
                          <td>{exam.date} </td>
                          <td>{exam.marks} </td>
                          <td>{exam.courseName} </td>
                          <td>{exam.examinationHall} </td>
                        </tr>
                      );
                    })
                  ) : (
                    <td> No Examinations Are Currently Registered </td>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Exam;
