import Zhenish from "./components/Zhenish";
import Albina from "./components/albina";
import Nurjanat from "./components/Nurjanat";
import Samat from "./components/Samat";

function App() {
  return (
    <div>
      <h1>Student Directory</h1>
      <div className="student-list">
        <Zhenish />
        <Albina />
        <Nurjanat />
        <Samat />

        {/* add more student components here */}
      </div>
    </div>
  );
}

export default App;
