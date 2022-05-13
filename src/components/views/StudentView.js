/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */
import { Link } from "react-router-dom";
const StudentView = (props) => {
  const { student } = props;

  // Render a single Student view 
  return (
    <div>
      <img src={student.imageUrl} alt="student" width="400" height="500"></img>
      <br/> 
      <h1>{student.firstname + " " + student.lastname}</h1>
      <h1>Email: {student.email}</h1>
      <h1>GPA: {student.gpa}</h1>
      <Link to={`/campus/${student.campus.id}`}>
        <h2>{student.campus.name}</h2>
      </Link>
    </div>
  );

};

export default StudentView;