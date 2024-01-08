import { useState } from "react";
import axios from "axios";
import borne from "../assets/images/borne_arcade_signup.png";
import ParallaxCoin from "../components/ParallaxCoin";
import "../styles/login.scss";

function Signup() {
  const [user, setUser] = useState({
    fistname: "",
    lastname: "",
    email: "",
    pseudo: "",
    password: "",
    membreId: "12345",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/players`, user);
  };
  return (
    <div className="wrapper-login">
      <ParallaxCoin />
      <div className="container-form">
        <img src={borne} alt="borne" className="borne-arcade" />
        <form onSubmit={handleSubmit} method="post" className="login-form">
          <div className="top-signup">
            <div className="signup-column">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={user.email}
                onChange={handleChange}
              />
            </div>
            <div className="signup-column">
              <label htmlFor="pseudo">Pseudo</label>
              <input
                type="text"
                name="pseudo"
                id="pseudo"
                value={user.pseudo}
                onChange={handleChange}
              />
            </div>
            <div className="signup-column">
              <label htmlFor="firstname">Prénom</label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                value={user.firstname}
                onChange={handleChange}
              />
            </div>
            <div className="signup-column">
              <label htmlFor="lastname">Nom</label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                value={user.lastname}
                onChange={handleChange}
              />
            </div>
            <div className="signup-column">
              <label htmlFor="password">Mot de passe</label>
              <input
                type="password"
                name="password"
                id="password"
                value={user.password}
                onChange={handleChange}
              />
            </div>
            <div className="signup-column">
              <label htmlFor="password-confirm">Confirmer</label>
              <input
                type="password"
                name="password-confirm"
                id="password-confirm"
                value={user.password}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn-connexion">
              Inscription
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
