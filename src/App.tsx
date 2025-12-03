import { Routes, Route } from "react-router-dom";
import Home from "./features/entrypoint/Home";
import { routes } from "@shared/constants/routes/routes";
import { Suspense } from "react";
import { Spinner } from "./ui/components";

function App() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center w-screen">
          <span className="text-gray-500 text-lg">
            <Spinner size="large" />
          </span>
        </div>
      }
    >
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
    </Suspense>
  );
}

export default App;
