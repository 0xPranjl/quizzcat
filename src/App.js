import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Dash from "../src/Pages/Dash";
import Daily from "../src/Pages/Daily";
import Polls from "../src/Pages/Polls";
import Splash from '../src/Pages/Splash';
const AppContainer = styled.div`
  min-height: 100vh;
  background-image: url('path_to_your_background_image');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
`;

const StickyNavbar = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #ffffff;
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  z-index: 100;
`;

const Tab = styled.div`
  padding: 10px;
  cursor: pointer;
  color: ${props => (props.active ? '#007bff' : '#000000')};
`;

const App = () => {
  const [ani,sani]=useState(false);
 
  return (
    <Router>
      <AppContainer>
        <Routes>
        <Route path="/" element={<Splash/>}  />
        <Route path="/Dash" element={<Dash/>}  />
        <Route path="/Daily" element={<Daily/>}  />
        <Route path="/Polls" element={<Polls/>}  />
        </Routes>
      </AppContainer>
    </Router>
  );
}

export default App;
