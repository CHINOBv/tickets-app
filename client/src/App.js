import UiContextProvider from "./context/UiContext";
import RouterPages from "./pages/RouterPages";

function App() {
  return (
    <UiContextProvider>
      <RouterPages />
    </UiContextProvider>
  );
}

export default App;
