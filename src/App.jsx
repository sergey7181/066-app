import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";

const Profile = () => {
  return <h1>Профиль</h1>;
};
const Messages = () => {
  return <h2>Сообщения</h2>;
};
const Settings = () => {
  return <h2>Страница с настройками</h2>;
};

function App() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-3">
          <div className="nav flex-column nav-pills">
            <NavLink to="profile" className="nav-link">
              Профиль
            </NavLink>
            <NavLink to="messages" className="nav-link">
              Сообщения
            </NavLink>
            <NavLink to="settings" className="nav-link">
              Настройки
            </NavLink>
          </div>
        </div>
        <div className="col-md-9">
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;