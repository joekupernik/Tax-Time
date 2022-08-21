import { Routes, Route } from "react-router-dom";
import Header from "./HeaderComponent";


function App() {
  return (
    <div className="App">
        <Routes>
          <Header />
          <Route></Route>
          <Footer />
        </Routes>
    </div>
  );
}

export default App;
