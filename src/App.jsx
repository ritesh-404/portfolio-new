// src/App.jsx
import "./App.css";
import { Switch, Route } from "wouter";
import HomePage from "./pages/HomePage";
import CaseStudyPage from "./pages/CaseStudyPage";
import NotFoundPage from "./pages/NotFoundPage";
import SideRails from "./components/ui/SideRails";
function App() {
  return (
    <>
      <SideRails />
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/home" component={HomePage} />
        <Route path="/work/:id" component={CaseStudyPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
}

export default App;
