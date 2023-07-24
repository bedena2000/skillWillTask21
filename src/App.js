import store from "./store/store";
import { Provider } from "react-redux";
import TodoListWrapper from "./components/TodoListWrapper";
import InputElement from "./components/InputElement";

function App() {
  return (
    <div className="App">

      <Provider store={store}>
        <div className="flex flex-col gap-[40px]">
          <InputElement />
          <TodoListWrapper />
        </div>
      </Provider>


    </div>
  );
}

export default App;
