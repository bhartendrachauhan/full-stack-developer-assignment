import { useContext } from 'react';
import './App.css';
import Header from './components/Header';
import OptionList from './components/OptionList';
import PersonView from './components/PersonView';
import { Context } from './Context';

function App() {
  const context = useContext(Context)
  return (
    <>
      <Header/>
      <div className="flex">
        <div className=" w-70v h-90v">
          {context.state.data.length>0?<PersonView/>:
          <span className='font-bold text-3xl'>No Data Found</span>}
        </div>
        <div className="w-30v h-90v border-8 border-[#d9d9d9] border-solid p-4">
          <OptionList/>
        </div>
      </div>
    </>
  );
}

export default App;
