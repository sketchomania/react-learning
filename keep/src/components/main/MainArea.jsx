import "./MainArea.module.css";
import TakeANote from "./TakeANote";
import ShowNotes from "./ShowNotes";

const MainArea = () => {
  return (
    <div>
      <h4>Main Area</h4>
      <TakeANote />
      <h4>gap</h4>
      <ShowNotes />
    </div>
  );
};

export default MainArea;
