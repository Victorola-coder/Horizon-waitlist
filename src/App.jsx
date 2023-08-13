import { Route, Routes } from "react-router-dom";
import Waitlist from "./components/waitlist";
import Index from "./components/v1";
import NotFound from "../error";

const App = () => {
  return (
    <>
      <Routes>
        <Route index path="/" element={<Waitlist />} />
        <Route path="/v1" element={<Index />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
