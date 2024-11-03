import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';
import "../CameraInput/CameraInput.css";

export default function CameraInput(props) {
  const setInputImage=props.onChangeInput;
  function handleTakePhoto (dataURL) {
    setInputImage(dataURL);
  }
  return (
    <Camera
      onTakePhoto = { (dataUri) => { handleTakePhoto(dataUri); } }
    />
  );
}