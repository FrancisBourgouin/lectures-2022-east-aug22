import axios from "axios";
import { useState } from "react";
import useWow from "./hooks/useWow";

import RepoForm from "./components/RepoForm";
import Commits from "./components/Commits";

import "./App.css";

//  https://api.github.com/repos/OWNER/REPO/commits

function App() {
  const { sayWow, saySameWow } = useWow();
  const [commitState, setCommitState] = useState({
    owner: "",
    repo: "",
    commits: null,
  });
  const { owner, repo, commits } = commitState;

  const fetchCommitInformation = (formData) => {
    const { owner, repo } = formData;
    if (owner !== commitState.owner || repo !== commitState.repo) {
      return axios
        .get(`https://api.github.com/repos/${owner}/${repo}/commits`)
        .then((res) => res.data)
        .then((data) => setCommitState({ ...formData, commits: data }))
        .then(sayWow)
        .catch(() => setCommitState({ ...formData, commits: null }));
    }
    saySameWow();
  };

  return (
    <div className="App">
      <header>
        <h1>SUPER COMMIT CHECKER YEAH</h1>
      </header>
      <main>
        <RepoForm onSubmit={fetchCommitInformation} />
        {owner && commits && <Commits {...commitState} />}
        {owner && !commits && <p>THE REPO DOESN'T EXIST.</p>}
      </main>
    </div>
  );
}

export default App;
