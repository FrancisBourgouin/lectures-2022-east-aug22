import CommitList from "./CommitList";

export default function Commits(props) {
  const { repo, owner, commits } = props;

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
