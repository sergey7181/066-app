import styles from "./Profile.module.css"


export const Profile = (props) => {
 
  const familyStyle = {
    color: "blue",
    fontSize: "1.2rem"
  }
  let user = props.function();

  return (
    <div className="row">
      <div className="col-md-4">
        <img
          src={user.avatar}
          alt=""
          width="100%"
        />
      </div>
      <div className="col-md-8">
        <p className={styles.id}>
          <span>Id: </span>
          <span>{user.id}</span>
        </p>
        <p className={styles.email}>
          <span>Email: </span>
          <span>{user.email}</span>
        </p>
        <p>
          <span style={familyStyle}>Фамилия имя: </span>
          <span>{user.lastname} {user.name}</span>
        </p>
        <p style={{color: "red", fontSize: "1.5rem"}}>Рассказ о себе</p>
      </div>
    </div>
  );
};