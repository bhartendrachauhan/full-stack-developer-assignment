import './App.css';
import Header from './components/Header';
import OptionList from './components/OptionList';
import PersonView from './components/PersonView';

function App() {
  return (
    <>
      <Header/>
      <div className="flex">
        <div className=" w-70v h-90v">
          <PersonView/>
        </div>
        <div className="w-30v h-90v border-8 border-[#d9d9d9] border-solid p-4">
          <OptionList/>
        </div>
      </div>
    </>
  );
}

export default App;
