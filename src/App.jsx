// src/App.jsx
import "./App.css";
import { Switch, Route } from "wouter";
import HomePage from "./pages/HomePage";
import CaseStudyPage from "./pages/CaseStudyPage";
import NotFoundPage from "./pages/NotFoundPage";
import SideRails from "./components/ui/SideRails";
import Writings from "./pages/Writings";
import FAQs from "./pages/FAQs";

function App() {
  document.onkeydown = (event) => {
    if (event.key.toLowerCase() === "p") {
      window.open(
        "https://cal.com/ritesh-n/15min?overlayCalendar=true",
        "_blank",
      );
    }
  };
  return (
    <>
      <SideRails />
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/home" component={HomePage} />
        <Route path="/writings" component={Writings} />
        <Route path="/faqs" component={FAQs} />
        <Route path="/work/:id" component={CaseStudyPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
}

export default App;
