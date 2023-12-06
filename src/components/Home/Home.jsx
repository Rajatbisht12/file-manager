import React, { useState } from "react";
import { Oval } from "react-loader-spinner";
import "./style.css";
import axios from "axios";
const Home = () => {
  const [data, setData] = useState("");
  const [isLoading, setLoading] = useState(true);
  const [command, setCommand] = useState("");

  // Get user input
  const onCommandChange = (e) => {
    e.preventDefault();
    setCommand(e.target.value);
  };

  // Start the app on server
  const onStart = async () => {
    try {
      const response = await axios.get("http://localhost:8082/api/data");
    } catch (e) {}
  };

  const onSend = async () => {}; // send command to server

  return (
    <div className="home-container">
      <div className="home-wrapper">
        <p className="home-heading">
          FILE MANAGER <br />
          IS{" "}
          <span
            style={{
              color: "#e63946",
            }}
          >
            LIVE NOW!
          </span>
        </p>

        <p className="home-subheading">Start managing your files now!</p>

        <button className="start-btn" onClick={onStart}>
          Start
        </button>

        <div className="window-container">
          <div className="window-wrapper">
            {isLoading ? (
              <p className="loader">
                <Oval
                  height={50}
                  width={50}
                  color="#01102e"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                  ariaLabel="oval-loading"
                  secondaryColor="#4fa94d"
                  strokeWidth={2}
                  strokeWidthSecondary={2}
                />
              </p>
            ) : (
              <p className="notLoading">
                {data}{" "}
                <div className="user-response">
                  <input
                    type="text"
                    className="command-input"
                    value={command}
                    onChange={onCommandChange}
                  />
                  <button className="send-btn" onClick={onSend}>
                    Enter
                  </button>
                </div>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
