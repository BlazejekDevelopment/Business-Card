import SocialMedia from "../SocialMedia/SocialMedia";
import styles from "./SocialMediaContainer.module.css";
import ImageOfGitHub from "../assets/GitHub.jpg";
//import ImageOfFacebook from "../assets/Facebook.svg";
import ImageOfDiscord from "../assets/Discord.svg";

function SocialMediaContainer() {
  return (
    <div className={styles.container}>
      <SocialMedia
        name="GitHub"
        adres="/BlazejekDevelopment"
        image={ImageOfGitHub}
        adresURL="https://github.com/BlazejekDevelopment"
      />
      {/* <SocialMedia
        name="Facebook"
        adres="blazej-eikmannnn"
        image={ImageOfFacebook}
        adresURL="https://www.facebook.com/Anonim120?locale=pl_PL"
      /> */}
      <SocialMedia
        name="Discord"
        adres="Błażejek Devlopment Community"
        image={ImageOfDiscord}
        adresURL="https://discord.gg/sSSMWQXQ8m"
      />
    </div>
  );
}

export default SocialMediaContainer;
