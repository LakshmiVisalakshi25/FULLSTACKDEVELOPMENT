import React from "react";
function ChildComponent(props) {
  return (
    <div>
      <h2>Student Details:</h2>
      <p><b>Name:</b> {props.studentData.name}</p>
      <p><b>Roll Number:</b> {props.studentData.rollNumber}</p>
      <p><b>Course:</b> {props.studentData.course}</p>
    </div>
  );
}
export default ChildComponent;
