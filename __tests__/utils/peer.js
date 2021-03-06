require('./mockPeerEnv');
const AgoraRtcEngine = require('../../js/AgoraSdk').default;

if (process.argv.length < 4) {
  console.error(`missing params`);
  process.exit(1);
}

const channel = process.argv[2];
const uid = parseInt(process.argv[3], 10);

console.log(`joining ${channel} with uid ${uid}`);

let rtcEngine = new AgoraRtcEngine();
rtcEngine.onRegisterDeliverFrame = () => {};
rtcEngine.initRender = () => {};
rtcEngine.initialize('aab8b8f5a8cd4469a63042fcfafe7063');
rtcEngine.setChannelProfile(1);
rtcEngine.setClientRole(1);
rtcEngine.setupLocalVideo();
rtcEngine.setAudioProfile(0, 1);
rtcEngine.setVideoProfile(33, false);
rtcEngine.enableVideo();
rtcEngine.enableLocalVideo(true);
rtcEngine.joinChannel('', channel, '', uid);

setTimeout(() => {}, 60 * 1000);
