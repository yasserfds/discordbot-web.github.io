import { BrowserRouter } from "react-router-dom";
import Home from "./components/home";

export default function App() {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
}
