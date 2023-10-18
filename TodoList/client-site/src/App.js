
import './App.css';
import Controls from './Components/Controls';
import FormInput from './Components/FormInput';
import TodoList from './Components/TodoList';

function App() {
  return (

    <div className="w-[20%] m-[auto] mt-[150px] bg-[#fff] rounded-[5px]">
      <FormInput />
      <Controls />
      <TodoList />
    </div>

  );
}

export default App;
