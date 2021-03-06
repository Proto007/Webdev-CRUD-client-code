/*==================================================
AllStudentsView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the all students view page.
================================================== */
import { Link } from "react-router-dom";

const AllStudentsView = (props) => {
  const {students, deleteStudent} = props;
  // If there is no student, display a message
  if (!students.length) {
    return (
    <div>
      <p className="page-title">There are no students. Use the button below to add a new student!</p>
      <Link to={`newstudent`}>
        <button className="add-new">Add New Student</button>
      </Link>
    </div>
    );
  }
  
  // If there is at least one student, render All Students view 
  return (
    <div>
      <h1 className="page-title">All Students</h1>

      {students.map((student) => {
          let name = student.firstname + " " + student.lastname;
          return (
            <div key={student.id}>
              <Link to={`/student/${student.id}`}>
                <h2>{name}</h2>
              </Link>
              {/* Edit button links to edit view for current studeny */}
              <Link to={`/student/${student.id}/edit`} >
                <button className="edit-btn">Edit</button>
              </Link>
              <button className="delete-btn" onClick={() => deleteStudent(student.id)}>Delete</button>
              <hr/>
            </div>
          );
        }
      )}
      <br/>
      <Link to={`/newstudent`}>
        <button className="add-new">Add New Student</button>
      </Link>
      <br/><br/>
    </div>
  );
};


export default AllStudentsView;