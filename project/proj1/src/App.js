import logo from './logo.svg';
import './App.css';
import Box1 from './component/Box1';

function App() {
  return (
    <div className='basic'>
      <Box1 name="한국"/>
      <Box1 name="미국"/>
      <Box1 name="중국"/>
    </div>
  );
}

export default App;