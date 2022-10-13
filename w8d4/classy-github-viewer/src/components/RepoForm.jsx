import { Component } from "react";

export default class RepoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      repo: "",
      owner: "",
    };

    // this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ ...this.state, [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="owner"
          placeholder="enter owner name"
          onChange={this.handleChange}
          value={this.state.owner}
        />
        <input
          type="text"
          name="repo"
          placeholder="enter repo name"
          onChange={this.handleChange}
          value={this.state.repo}
        />
        <button>Fetch commits</button>
      </form>
    );
  }
}
