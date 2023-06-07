import { render } from "solid-js/web";
import { lazy } from "solid-js";
import { Router, Routes, Route } from "@solidjs/router";
import "./index.css";

const Cariler = lazy(() => import("./pages/Cariler"));

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?"
  );
}

render(
  () => (
    <Router>
      <Routes>
        <Route path="*" component={Cariler} />
      </Routes>
    </Router>
  ),
  document.getElementById("root")
);
