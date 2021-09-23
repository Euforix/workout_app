import React, { Component } from "react";
import axios from "axios";
import ExerciseDataService from "../services/exercise.service";
import { Link } from "react-router-dom";

export default class AddExercise extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.saveExercise = this.saveExercise.bind(this);
    this.newExercise = this.newExercise.bind(this);

    this.state = {
      id: null,
      name: "",
      description: "", 
      // published: false,

      submitted: false
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  saveExercise() {
    axios({
      method: 'post',
      url: 'http://localhost:8000/api/exercises',
      data: {
        name: this.state.name,
        description: this.state.description
      }
    });

  }

  newExercise() {
    this.setState({
      id: null,
      name: "",
      description: "",
      // published: false,

      submitted: false
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newExercise}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                value={this.state.name}
                onChange={this.onChangeName}
                name="name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={this.state.description}
                onChange={this.onChangeDescription}
                name="description"
              />
            </div>
            <Link to="/exercises">
              <button onClick={this.saveExercise} className="btn btn-success">
                Submit
              </button>
            </Link>
            <div>
            <Link to="/exercises">
                <button className="m-3 btn btn-sm btn-warning">
                  <span>Back</span>
                </button>
              </Link>
            </div>
          </div>
          
        )}
      </div>
    );
  }
}