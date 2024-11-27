import SubtitlesAndImage from "../SubtitlesAndImage/SubtitlesAndImage.jsx";
import styles from "./Card.module.css";
import SocialMediaContainer from "../SocialMediaContainer/SocialMediaContainer.jsx";

function Card() {
  return (
    <div className={styles.container}>
      <SubtitlesAndImage
        name="BŁAŻEJEK DEVELOPMENT"
        text={"NAJLEPSZE ZDJĘCIA I STRONY INTERNETOWE NA CAŁYM ŚWIECIE"}
      />
      <SocialMediaContainer />
    </div>
  );
}

export default Card;
