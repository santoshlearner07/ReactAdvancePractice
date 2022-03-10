import './App.css';
import ClickCounter from './components/ClickCounter';
import FragmentDemo from './components/FragmentDemo';
import HowerCounter from './components/HowerCounter';
import ParentComponent from './components/ParentComponent';
import PureCompo from './components/PureCompo';
import Table from './components/Table';

function App() {
  return (
    <div className="App">
      <Table />
      <FragmentDemo />
      <ParentComponent />
      <ClickCounter name='Santosh' />
      <HowerCounter />
    </div>
  );
}

export default App;
