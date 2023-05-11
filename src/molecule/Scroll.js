import styles from "./Scroll.module.css";

export const Scroll = ({ elements }) => {
  return (
    <div className={styles.ProfileContainer}>
      <img src={elements.avatar} alt="image" />

      <h1>{elements.id}</h1>
      <h2>{elements.email}</h2>
      <h1>
        {elements.first_name} {elements.last_name}
      </h1>
    </div>
  );
};
