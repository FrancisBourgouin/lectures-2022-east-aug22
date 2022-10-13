//   const url = commitList[0].html_url
// const message = commitList[0].commit.message
// const date = commitList[0].commit.author.date
// const name = commitList[0].commit.author.name

export default function CommitListItem(props) {
  const url = props.commitData.html_url;
  const message = props.commitData.commit.message;
  const date = props.commitData.commit.author.date;
  const name = props.commitData.commit.author.name;
  return (
    <li>
      <p>{message}</p>
      <p>
        {date} / {name}
      </p>
      <p>
        <a href={url}>Link to commit</a>
      </p>
    </li>
  );
}
