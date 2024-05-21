const TableRow = (props) => {
  return (
    <tr>
      <th scope="row">{props.index + 1}</th>
      <td>{props.name} {props.lastname}</td>
    </tr>
  );
}


export const Settings = (props) => {
  let users = props.function();
  console.log(users);
  let usersCount = Object.keys(users).length;
  let userRow = [];
  for (let i = 0; i < usersCount; i++) {
    userRow.push(<TableRow name={users[i].name} lastname={users[i].lastname} index={i} key={i}/>);
  }
  return (
    <div className="row">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Имя и фамилия</th>
          </tr>
        </thead>
        <tbody>
          {userRow}
        </tbody>
      </table>
    </div>
  );
};