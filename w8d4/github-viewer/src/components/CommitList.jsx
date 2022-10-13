import CommitListItem from "./CommitListItem";

export default function CommitList(props) {
  const parsedCommits = props.commits.map((commit) => (
    <CommitListItem key={commit.sha} commitData={commit} />
  ));
  return <ul>{parsedCommits}</ul>;
}
