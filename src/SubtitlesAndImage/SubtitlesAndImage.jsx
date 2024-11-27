import myImage from "../assets/Photo With Camera.jpg";
import styles from "./SubtitlesAndImage.module.css";
import propTypes from "prop-types";

function SubtitlesAndImage({ name, text }) {
  return (
    <div className="firstPart">
      <img className={styles.image} src={myImage} alt="My photo with camera" />
      <div className={styles.wrapper}>
        <h1 className={styles.heading}>{name}</h1>
        <h2 className={styles.subHeading}>{text}</h2>
      </div>
    </div>
  );
}

SubtitlesAndImage.propTypes = {
  name: propTypes.string.isRequired, //Wymagane zmienne
  text: propTypes.string.isRequired,
};

export default SubtitlesAndImage;
