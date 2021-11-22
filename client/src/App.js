import { useSelector } from "react-redux";
import { FinanceTable, Loader } from "./components";
import "./App.css";
import { selectorGetFinanceData } from "./redux/selectors";

function App() {
  const tickerData = useSelector(selectorGetFinanceData);

  return !tickerData.length ? (
    <Loader />
  ) : (
    <FinanceTable tickerData={tickerData} />
  );
}

export default App;
