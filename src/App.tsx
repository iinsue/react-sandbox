import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./routes/page";
import TablePage from "./routes/table/page";
import FakerPage from "./routes/table/faker/page";
import Layout from "./components/common/layout";
import ErrorPage from "./routes/error";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="table" element={<TablePage />} />
          <Route path="table/faker" element={<FakerPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
