// src/App.jsx
import "./App.css";
import { Switch, Route } from "wouter";
import HomePage from "./pages/HomePage";
import CaseStudyPage from "./pages/CaseStudyPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div className="relative min-h-screen lg:pb-32 pb-24 pt-4 sm:pt-8 px-4 sm:px-8 bg-fff text-primary">
      {/* Outer Layout Frame Borders */}
      <div className="fixed top-0 left-0 right-0 h-4 sm:h-8 border-b border-border pointer-events-none bg-fff z-10" />
      <div className="absolute top-0 bottom-0 left-0 w-4 sm:w-8 border-r border-border pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-4 sm:w-8 border-l border-border pointer-events-none" />

      {/* Dynamic Page Router */}
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/home" component={HomePage} />
        <Route path="/case-study/:id" component={CaseStudyPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
