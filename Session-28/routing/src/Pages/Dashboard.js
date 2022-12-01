import { useState } from "react";

function Dashboard() {
  let [mood, setMood] = useState("How are you feeling?");
  let [moodPic, setMoodPic] = useState("images/happy.svg");

  const changeMood = (e) => {
    setMood((mood = "You are " + e.target.innerHTML));
    setMoodPic((moodPic = "images/" + e.target.dataset.mood + ".svg"));
  };

  return (
    <div className="dashboard">
      <h1 className="header">Dashboard</h1>
      <p className="mood">{mood}</p>
      <img src={moodPic} alt="Your mood"></img>
      <div>
        <button data-mood="happy" onClick={changeMood}>
          happy :)
        </button>
        <button data-mood="ok" onClick={changeMood}>
          just ok :|
        </button>
        <button data-mood="sad" onClick={changeMood}>
          sad :(
        </button>
      </div>
    </div>
  );
}
export default Dashboard;
