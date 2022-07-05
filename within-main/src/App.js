import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { WithinAppBar } from "./components/AppBar";
import { Login } from "./components/Login";
import { Questions } from "./components/Questions/Questions";
import { Questionnaire } from "./components/Questions/Questionnaire";
import { EmailSent } from "./components/Questions/EmailSent";
import { ContentLibrary } from "./components/ContentLibrary/ContentLibrary";
import { Player } from "./components/Player/Player";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <WithinAppBar />
        <Container maxWidth="lg">
          
          <Routes>
            <Route path="/" element={<Login />}/>
          </Routes>
          <Routes>
            <Route path="questionnaire" element={<Questionnaire />}/>
          </Routes>
          <Routes>
            <Route path="email-success" element={<EmailSent />}/>
          </Routes>
          <Routes>
            <Route path="content-library" element={<ContentLibrary />}/>
          </Routes>
          <Routes>
            <Route path="player/:id" exact element={<Player />}/>
          </Routes>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
