import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Navigation } from "../Components/Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./home";
import { LearningPage } from "./LearningPage";
import { Profile } from "./Profile";
import { TutorialPage } from "./TutorialPage";
import { DictionaryPage } from "./Dictionary";
import WordPage from "./WordPage";
import Class from "./Class";
import ClassDetailPage from "../Components/ClassDetailPage";
import WordDetailPage from "../Components/WordDetailPage"; 

function Main() {
  return (
    <Container sm={true}>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/dictionary" component={DictionaryPage}></Route>
          <Route exact path="/class" component={Class}></Route>
          <Route exact path="/word" component={WordPage}></Route>
          <Route path="/class/detail" component={ClassDetailPage}></Route> 
          <Route path="/word/detail" component={WordDetailPage}></Route> 
          <Route exact path="/learningPage" component={LearningPage}></Route>
          <Route exact path="/profile" component={Profile}></Route>
          <Route exact path="/tutorial" component={TutorialPage}></Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default Main;
