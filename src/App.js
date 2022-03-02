import './App.css';
import Header from './components/Header';
import { useEffect, useState } from 'react';
// import TaskList from './components/TaskList';
import { BrowserRouter as Router} from 'react-router-dom';
import Routes from './routes'
import Chat from './pages/chat/Chat';
// import Task from './pages/TaskApp/TaskList';
function App() {

    return (
      <div>
        {/* <TaskList></TaskList>         */}
        {/* <Task></Task> */}
        <Chat/>
        <Router>
      <Header name="RuanDevWeb"></Header>
          <Routes/>
        </Router>
      </div>
    );
}

export default App;
