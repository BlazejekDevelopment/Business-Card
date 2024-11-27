import styles from "./SocialMedia.module.css";

function SocialMedia({ name, adres, image, adresURL }) {
  return (
    <a href={adresURL} target="_blank">
      <div className={styles.container}>
        <img className={styles.image} src={image} alt={`Logo of ${name}`} />
        <div className={styles.wrapper}>
          <h3 className={styles.title}>{name}</h3>
          <p className={styles.adres}>{adres}</p>
        </div>
      </div>
    </a>
  );
}

export default SocialMedia;
