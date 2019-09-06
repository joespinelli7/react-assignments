import React from "react";
import ReactDOM from "react-dom";
import ScotchInfoBar from "./ScotchInfoBar";
import "./styles.css";

/**
 * Our data
 * ------------------------
 */
const user = {
  name: "Chris on Code",
  location: "Las Vegas",
  foodType: "Everything",
  age: 28,
  likes: "Coding into the wee hours of the morning",
  twitterUsername: "chrisoncode",
  avatar:
    "https://scotch-res.cloudinary.com/image/upload/v1556479698/xRZsnhr0_400x400_cpyg2t.png"
};

/**
 * Our React component where we should display data
 * ------------------------
 */
function App() {
  const url = `https://twitter.com/${user.twitterUsername}`;

  return (
    <div className="App">
      <div className="user-deets">
        <img src={user.avatar} alt={user.name} />
        <h3><a href={url}>{user.name}</a></h3>
        <strong>Location</strong>
        <p>{user.location}</p>
        <strong>Eats</strong>
        <p>{user.foodType}</p>
        <strong>Age</strong>
        <p>{user.age}</p>
        <strong>Likes</strong>
        <p>{user.likes}</p>
        <strong>Twitter</strong>
        <a href={url}>@{user.twitterUsername}</a>
      </div>

      <ScotchInfoBar />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
