import ImageUploader from 'react-image-upload'
import 'react-image-upload/dist/index.css'
import "../ImageUpload/ImageUpload.css";

export default function ImageUpload(props) {
  const setInputImage=props.onChangeInput;

  function getImageFileObject(imageFile) {
    setInputImage(imageFile.dataUrl);
  }
  function runAfterImageDelete(file) {
    setInputImage("default.png");
  }

  return (
    <ImageUploader
      onFileAdded={(img) => getImageFileObject(img)}
      onFileRemoved={(img) => runAfterImageDelete(img)}
    />
  )
}