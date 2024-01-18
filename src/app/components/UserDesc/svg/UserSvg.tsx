import styles from "../styles.module.css";

export const UserSvg = () => {
  return (
    <svg
      className={styles.user_icon}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 4C13.0609 4 14.0783 4.42143 14.8284 5.17157C15.5786 5.92172 16 6.93914 16 8C16 9.06087 15.5786 10.0783 14.8284 10.8284C14.0783 11.5786 13.0609 12 12 12C10.9391 12 9.92172 11.5786 9.17158 10.8284C8.42143 10.0783 8 9.06087 8 8C8 6.93914 8.42143 5.92172 9.17158 5.17157C9.92172 4.42143 10.9391 4 12 4ZM12 20C12 20 20 20 20 18C20 15.6 16.1 13 12 13C7.9 13 4 15.6 4 18C4 20 12 20 12 20Z"
        fill="#FCFCFC"
        fillOpacity="0.7"
      />
    </svg>
  );
};
export default UserSvg;
