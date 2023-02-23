import './App.css';
import Mail from './Mail';
import EmailList from './EmailList';
import Header from './Header';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app">
        <Header/>

        <div className='app__body'>
          <Sidebar/>
          <Routes>
            <Route path='/' element={<EmailList/>}/>
            <Route path='/mail' element={<Mail/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
