import { Route, Switch } from "wouter";
import HomePage from "./pages/HomePage";
import CaseStudyPage from "./pages/CaseStudyPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/home" component={HomePage} />
      <Route path="/portfolio" component={HomePage} />
      <Route path="/work/:id" component={CaseStudyPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
}
