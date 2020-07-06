import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Wsp_user from './components/whatsapp_up';
import MenuOpciones from './components/header';
import Check_progress from './components/check_progress'
import DelayingAppearance from './components/loading'
import Result_text from './components/results'

import { Grid } from '@material-ui/core';


function App() {
  return (
    <div className="App">
        <MenuOpciones />
    <Grid>
        <Check_progress />
        <Wsp_user />
        <DelayingAppearance />
        <Result_text />
    </Grid>

    </div>
  );
}
export default App;