import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Menubar from "./Components/Menubar/Menubar";
import Body from "./Components/Body/Body";
import { Provider } from "react-redux";
import { store } from "./store";
import { Routes, Route } from "react-router-dom";
import DistrictDetails from "./Components/DistrictDetails/DistrictDetails";
import MapView from "./Components/MapView/MapView";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavBar />
                <Menubar />
                <Body />
              </>
            }
          />

          <Route
            path="/district/:state"
            element={
              <>
                <NavBar />
                <Menubar />
                <DistrictDetails />
              </>
            }
          />

          <Route path="/mapView" element={<MapView />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
