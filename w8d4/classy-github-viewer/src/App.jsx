import logo from "./logo.svg";
import "./App.css";
import RepoForm from "./components/RepoForm";
import { Component } from "react";
import axios from "axios";
import Commits from "./components/Commits";

//  https://api.github.com/repos/OWNER/REPO/commits

class App extends Component {
  constructor() {
    super();

    this.state = {
      repo: "",
      owner: "",
      commits: null,
    };
  }

  componentDidMount() {
    this.fetchCommitsFromRepo({ owner: "FrancisBourgouin", repo: "iceberg" });
  }

  fetchCommitsFromRepo = (formData) => {
    const { owner, repo } = formData;
    axios
      .get(`https://api.github.com/repos/${owner}/${repo}/commits`)
      .then((res) => res.data)
      .then((data) => this.setState({ owner, repo, commits: data }))
      .catch(() => this.setState({ owner, repo, commits: null }));
  };

  render() {
    const { commits, owner, repo } = this.state;

    return (
      <div className="App">
        <header>
          <h1>Classy Github Commit viewer 😎</h1>
        </header>
        <RepoForm onSubmit={this.fetchCommitsFromRepo} />
        {owner && commits && <Commits {...this.state} />}
        {owner && !commits && <p>REPO DOESN'T EXIST</p>}
      </div>
    );
  }
}

export default App;
