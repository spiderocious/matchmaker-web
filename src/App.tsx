import { Routes, Route } from "react-router-dom";
import Home from "./features/entrypoint/Home";
import { routes } from "@shared/constants/routes/routes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {routes.map((route) => (
        <Route
          key={route.name}
          path={route.path}
          element={<route.component />}
        />
      ))}
    </Routes>
  );
}

export default App;
