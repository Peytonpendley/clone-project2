import './App.css';
import Mail from './Mail';
import EmailList from './EmailList';
import Header from './Header';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SendMail from './SendMail';
import { useSelector } from 'react-redux'
import { selectSendMessageIsOpen } from './features/mailSlice';

function App() {
  const openComposeButton = useSelector(selectSendMessageIsOpen);
  console.log('sendMessageIsOpen app ===', openComposeButton);

  return (
    <Router>
      <div className="app">
        <Header/>

        <div className='app__body'>
          
          <Routes>
            <Route path='/' element={<EmailList/>}/>
            <Route path='/mail' element={<Mail/>}/>
          </Routes>
        </div>
        {openComposeButton && <SendMail/>}
      </div>
    </Router>
  );
}

export default App;
