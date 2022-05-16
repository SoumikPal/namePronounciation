import React, { Component } from 'react';
import { getTokenOrRefresh } from './util/token_util';
import { ResultReason } from 'microsoft-cognitiveservices-speech-sdk';
import mic from '../resources/microphone.png'
import afile from '../resources/audio-file.png'
import './SpeechToText.css'

const speechsdk = require('microsoft-cognitiveservices-speech-sdk')

export default class SpeechToText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayText: 'INITIALIZED: ready to test speech...'
    }
  }

  async componentDidMount() {
    // check for valid speech key/region
    const tokenRes = await getTokenOrRefresh();
    if (tokenRes.authToken === null) {
      this.setState({
        displayText: 'FATAL_ERROR: ' + tokenRes.error
      });
    }
  }

  async sttFromMic() {
    const tokenObj = await getTokenOrRefresh();
    const speechConfig = speechsdk.SpeechConfig.fromAuthorizationToken(tokenObj.authToken, tokenObj.region);
    speechConfig.speechRecognitionLanguage = 'en-US';

    const audioConfig = speechsdk.AudioConfig.fromDefaultMicrophoneInput();
    const recognizer = new speechsdk.SpeechRecognizer(speechConfig, audioConfig);

    this.setState({
      displayText: 'speak into your microphone...'
    });

    recognizer.recognizeOnceAsync(result => {
      let displayText;
      if (result.reason === ResultReason.RecognizedSpeech) {
        displayText = `RECOGNIZED: Text=${result.text}`
      } else {
        displayText = 'ERROR: Speech was cancelled or could not be recognized. Ensure your microphone is working properly.';
      }

      this.setState({
        displayText: displayText
      });
    });
  }

  async fileChange(event) {
    const audioFile = event.target.files[0];
    console.log(audioFile);
    const fileInfo = audioFile.name + ` size=${audioFile.size} bytes `;

    this.setState({
      displayText: fileInfo
    });

    const tokenObj = await getTokenOrRefresh();
    console.log(tokenObj)
    const speechConfig = speechsdk.SpeechConfig.fromAuthorizationToken(tokenObj.authToken, tokenObj.region);
    speechConfig.speechRecognitionLanguage = 'en-US';

    const audioConfig = speechsdk.AudioConfig.fromWavFileInput(audioFile);
    const recognizer = new speechsdk.SpeechRecognizer(speechConfig, audioConfig);

    recognizer.recognizeOnceAsync(result => {
      let displayText;
      if (result.reason === ResultReason.RecognizedSpeech) {
        displayText = `RECOGNIZED: Text=${result.text}`
      } else {
        displayText = 'ERROR: Speech was cancelled or could not be recognized. Ensure your microphone is working properly.';
      }

      this.setState({
        displayText: fileInfo + displayText
      });
    });
  }

  render() {
    return (
      <div className="app-container">
        <div className="row main-container">
          <div className="col-6">
            <button className="micro-phone" onClick={() => this.sttFromMic()}><img src={mic} alt="micro-phone"></img>Convert speech to text from your mic.</button>
            <div className="mt-2 audio">
              <label htmlFor="audio-file"><img src={afile} alt="audio-file" className='audio-file'></img></label>
              <input
                type="file"
                id="audio-file"
                onChange={(e) => this.fileChange(e)}
                style={{ display: "none" }}
              />
              Convert speech to text from an audio file.
            </div>
          </div>
          <div className="col-6 output-display rounded">
            {this.state.displayText}
          </div>
        </div>
      </div>
    );
  }
}