import { Component } from "react";
import CommitList from "./CommitList";

export default class Commits extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("HELLO!");
  }

  componentWillUnmount() {
    console.log("KTHXBAI");
  }

  render() {
    const { repo, owner, commits } = this.props;

    return (
      <section>
        <h1>
          List of commits for <br />
          {owner}/{repo} <br />
          <a href={`https://github.com/${owner}/${repo}`} target="_blank">
            (LINK)
          </a>
        </h1>
        <CommitList commits={commits} />
      </section>
    );
  }
}
