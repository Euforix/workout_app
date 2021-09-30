import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function CreateWorkout(props) {
  const [values, setValues] = useState({
    name: "",
  });

  let history = useHistory();

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name } = values;
    const workout_data = { name };
    await axios.post("/api/workouts", workout_data);
    history.goBack();
  };

  return (
    <div>
      <div>
        <button
          className="btn btn-warning"
          style={{ marginTop: 25 }}
          onClick={history.goBack}
        >
          Go back
        </button>
      </div>
      <div className="submit-form">
        <div>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              required
              value={values.name}
              onChange={handleChange('name')}
              name="name"
              placeholder="Enter a name for this workout"
            />
          </div><button
              onClick={handleSubmit}
              className="btn btn-success"
              style={{ marginTop: 25 }}
            >
              Submit
            </button>
        </div>
      </div>
    </div>
  );
}