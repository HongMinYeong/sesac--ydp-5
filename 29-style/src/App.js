import CssModuleComponents from './CssModuleComponents';
import SassComponent from './SassComponent';
import StyledComponent from './StyledComponent';
import Mix from './Mix';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <h1>React style</h1>
      <h2>CSS Module</h2>
      <CssModuleComponents />

      <h2>SASS</h2>
      <SassComponent />

      <h2>styled-components</h2>
      <StyledComponent />
      <h2>Sass 실습</h2>
      <Mix />
    </div>
  );
}

export default App;
