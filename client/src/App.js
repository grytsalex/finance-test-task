import { useSelector } from "react-redux";
import { FinanceTable, Loader } from "./components";
import "./App.css";
import { selectorGetFinanceData } from "./selectors";

function App() {
  const tickerData = useSelector(selectorGetFinanceData);

  return !tickerData || tickerData?.length === 0 ? (
    <Loader />
  ) : (
    <FinanceTable tickerData={tickerData} />
  );
}

export default App;
