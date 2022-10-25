import "@tensorflow/tfjs";
import * as speechCommands from "@tensorflow-models/speech-commands";
import { useState } from "react";

import "./App.css";

const labels = [
  "Background Noise",
  "Bubble Tea",
  "Hangry",
  "Help",
  "Lighthouse",
  "Simba",
];
const coolLabels = ["📙📘📗", "🧋🧋🧋", "🍕🚫😡", "🆘🆘🆘", "💡🏠💡", "👶🦁👑"];

const scores = [
  0.044801976531744, 0.7254181504249573, 0.04660019651055336, 0.037404149770736694,
  0.09570083022117615, 0.050074636936187744,
];

// const biggestScore = Math.max(...scores);
// const biggestScoreIndex = scores.indexOf(biggestScore)

// console.log(labels[biggestScoreIndex])

function App() {
  const [currentScore, setCurrentScore] = useState(0);

  const createModel = async () => {
    const URL = "http://localhost:3000/model/";
    const checkpointURL = URL + "model.json"; // model topology
    const metadataURL = URL + "metadata.json"; // model metadata

    const recognizer = speechCommands.create(
      "BROWSER_FFT", // fourier transform type, not useful to change
      undefined, // speech commands vocabulary feature, not useful for your models
      checkpointURL,
      metadataURL
    );

    // check that model and metadata are loaded via HTTPS requests.
    await recognizer.ensureModelLoaded();

    return recognizer;
  };
  const options = {
    includeSpectrogram: true, // in case listen should return result.spectrogram
    probabilityThreshold: 0.85,
    invokeCallbackOnNoiseAndUnknown: true,
    overlapFactor: 0.5, // probably want between 0.5 and 0.75. More info in README
  };

  const listen = async (options) => {
    const recognizer = await createModel();
    const classLabels = recognizer.wordLabels(); // get class labels
    console.log(classLabels);
    recognizer.listen((result) => {
      const scores = Array.from(result.scores); // probability of prediction for each class
      // render the probability scores per class
      const biggestScore = Math.max(...scores);
      const biggestScoreIndex = scores.indexOf(biggestScore);

      biggestScoreIndex !== 0 && setCurrentScore(biggestScoreIndex);
    }, options);

    // Stop the recognition in 5 seconds.
    // setTimeout(() => recognizer.stopListening(), 5000);
  };

  return (
    <div className="App">
      <header>
        <h1>Super Voice to Emoji!</h1>
      </header>
      <button onClick={() => listen(options)}>Start listening</button>
      <p style={{ fontSize: "6em" }}>{coolLabels[currentScore]}</p>
    </div>
  );
}

export default App;
