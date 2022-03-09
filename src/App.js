import './App.css';
import FragmentDemo from './components/FragmentDemo';
import ParentComponent from './components/ParentComponent';
import PureCompo from './components/PureCompo';
import Table from './components/Table';

function App() {
  return (
    <div className="App">
      <Table />
      <FragmentDemo />
      <ParentComponent />
    </div>
  );
}

export default App;
