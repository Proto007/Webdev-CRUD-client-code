/*==================================================
AllCampusesView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display all campuses.
================================================== */
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllCampusesView = (props) => {
  const {campuses, deleteCampus} = props;
  // If there is no campus, display a message.
  if (!campuses.length) {
    return (
      <div>
        <p>There are no campuses. Use the button below to add a new campus!</p>
        <Link to={`newcampus`}>
          <button>Add New Campus</button>
        </Link>
      </div>
  )}

  // If there is at least one campus, render All Campuses view 
  return (
    <div>
      <h1 className="page-title">All Campuses</h1>

      {campuses.map((campus) => (
        <div key={campus.id}>
          <Link to={`/campus/${campus.id}`}>
            <h2>{campus.name}</h2>
          </Link>
          <h4>campus id: {campus.id}</h4>
          <img src={campus.imageUrl} alt="campus" width="500" height="300"></img>
          <br/>
          
          <Link to={`/campus/${campus.id}/edit`}>
            <button className="edit-btn">Edit</button>
          </Link>
          <button className="delete-btn" onClick={() => deleteCampus(campus.id)}>Delete</button>
          <hr/>
        </div>
      ))}
      <br/>
      <Link to={`/newcampus`}>
        <button className="add-new">Add New Campus</button>
      </Link>
      <br/><br/>
    </div>
  );
};

AllCampusesView.propTypes = {
  campuses: PropTypes.array.isRequired,
};

export default AllCampusesView;