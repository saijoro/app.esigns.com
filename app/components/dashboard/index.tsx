import DashBoardDocs from "./DashBoardDocs";
import DashBoardStats from "./Stats";

const DashBoard = () => {
  return (
    <div className="w-full">
      <DashBoardStats />
      <DashBoardDocs />
    </div>
  );
};

export default DashBoard;
