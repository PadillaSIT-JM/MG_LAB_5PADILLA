import React, { useState } from 'react';

export default function GradesCheck() {
  const gradeData = [
    { name: "Bryle", grade: "98" },
    { name: "Benny", grade: "73" },
    { name: "Karl", grade: "80" },
    { name: "Jude", grade: "85" },
  ];

  const [studentList, setStudentList] = useState([]);
  const [student, setStudent] = useState({ name: '', age: '', course: '', year: '' });
  
  const [foundGrade, setFoundGrade] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudent((prev) => ({ ...prev, [name]: value }));
  };

  const handlingButton = (e) => {
    e.preventDefault();
    
    const result = gradeData.find(item => item.name.toLowerCase() === student.name.toLowerCase());
    
    if (result) {
      setFoundGrade(`Grade for ${result.name}: ${result.grade}`);
    } else {
      setFoundGrade("No grade record found.");
    }

    setStudentList((list) => [...list, student]);
    setStudent({ name: "", age: "", course: "", year: "" });
  };

  return (
    <div className='Body' style={{ textAlign: 'center' }}>
      <h1>Student Registration & Grade Check</h1>
      
      {foundGrade && (
        <div style={{ padding: '10px', backgroundColor: '#7df0ff', margin: '10px auto', width: '50%', borderRadius: '5px' }}>
          <strong>{foundGrade}</strong>
        </div>
      )}

      <form onSubmit={handlingButton}>
        <table align='center'>
          <tbody>
            <tr><td><input type="text" name="name" placeholder="Enter Name to Check Grade" value={student.name} onChange={handleInputChange} required /></td></tr>
            <tr><td><input type="text" name="age" placeholder="Age" value={student.age} onChange={handleInputChange} required /></td></tr>
            <tr><td><input type="text" name="course" placeholder="Course" value={student.course} onChange={handleInputChange} required /></td></tr>
            <tr><td><input type="text" name="year" placeholder="Year" value={student.year} onChange={handleInputChange} required /></td></tr>
            <tr><td><button type="submit">Register & Check Grade</button></td></tr>
          </tbody>
        </table>
      </form>

      <h2>Registered Students</h2>
      <table align='center' border="1" style={{ marginTop: '20px', width: '80%' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {studentList.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.course}</td>
              <td>{item.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
