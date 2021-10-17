import React, { useState } from 'react';
import './App.css';

const App = () => {

  const [userRegister, setUserRegister] = useState({
    studentName: '',
    studentNumber: '',
    studentEmail: ''
  });

  const [records, setRecords] = useState([]);

  const studentData = (e) => {
    const { id, value } = e.target;
    if (id === "studentNumber" && value.length > 10) {
      alert("phone number should be 10 digits")
      return false;
    }
    setUserRegister({ ...userRegister, [id]: value })
  }
  const submit = (event) => {
    event.preventDefault();
    if (userRegister.studentNumber.length < 10) {
      alert("Phone Number should be 10 digits")
      return true;
    }
    const newRecord = {
      ...userRegister,
      id: new Date().getTime().toString()
    }
    setRecords([...records, newRecord])
    setUserRegister({
      studentName: '',
      studentNumber: '',
      studentEmail: ''
    })
  }

  return (
    <div className="container">

      <h1>Students Registration</h1>
      <form onSubmit={submit}>
        <input type="text" placeholder="Enter your Name"
          id="studentName" value={userRegister.studentName}
          onChange={studentData} required></input>
        <input type="email" placeholder="Enter your Email"
          id="studentEmail" value={userRegister.studentEmail}
          onChange={studentData} required></input>
        <input type="number" placeholder="Enter your Phone Number"
          id="studentNumber" value={userRegister.studentNumber}
          onChange={studentData} required></input>

        <button>submit</button>
      </form>

      <div >
        <h1>Registered Students List</h1>
        <h3>Number of Students Registered: {records.length}</h3>
        <table className="studentsList">
          {records.map(studentsList => {
            return (
              <div>
                <tr>
                  <th>Name: </th>
                  <td>{studentsList.studentName}</td>
                </tr>
                <tr>
                  <th>Email: </th>
                  <td>{studentsList.studentEmail}</td>
                </tr>
                <tr>
                  <th>Number: </th>
                  <td>{studentsList.studentNumber}</td>
                </tr>
              </div>
            )
          })
          }
        </table>
      </div>
    </div>
  )
}

export default App
