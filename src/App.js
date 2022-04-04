import { useState } from "react";
import Button from "./Button";
import styles from "./App.module.css";
import myImage1 from "./img/1.jpg";

function Bio() {
  return (
    <div
      style={{
        display: "flex",
        margin: "1vw",
      }}
    >
      <img src={myImage1}></img>
      <div style={{ display: "flex", alignItems: "center" }}>
        <ul>
          <li>1999 : Born in Daegu, South Korea</li>
          <li>`15~`18` : Gyeong sin HighSchool</li>
          <li>
            `18~ : KyungPook National University (major in Mobile enginering)
          </li>
          <li>`20~`22 : Air Force</li>
        </ul>
      </div>
    </div>
  );
}
function Contact() {
  return (
    <div
      style={{
        display: "flex",
        margin: "1vw",
      }}
    >
      <img src={myImage1}></img>
      <div style={{ display: "flex", alignItems: "center" }}>
        <ul>
          <li>E-mail : mettew0585@gmail.com</li>
          <li>Instagram : lauveun</li>
          <li>Github : mettew0585</li>
        </ul>
      </div>
    </div>
  );
}
function App() {
  const [d, setD] = useState(false);
  const onClick1 = (event) => {
    setD(false);
  };
  const onClick2 = () => {
    setD(true);
  };
  return (
    <div>
      <div
        id="menu"
        style={{
          display: "flex",
          justifyContent: "space-between",
          borderBottom: "0.2vw black solid",
        }}
      >
        <h1>Cho Hyeon Woo</h1>
        <ul style={{ display: "flex" }}>
          <button onClick={onClick1}>Bio</button>
          <button onClick={onClick2}>Contact</button>
        </ul>
      </div>
      <div>{d ? <Contact></Contact> : <Bio></Bio>}</div>
    </div>
  );
}

export default App;
