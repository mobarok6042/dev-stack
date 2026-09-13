import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Stacks from "./components/Stacks";
import "./App.css";
import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const fetchStacks = async () => {
  const response = await fetch("/data.json");

  if (!response.ok) {
    throw new Error("Unable to load the available stacks.");
  }

  return response.json();
};

function App() {
  const stacksPromise = fetchStacks();

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Navbar />
      <Banner />
      <Suspense fallback={<div>Loading...</div>}>
        <Stacks stackPromise={stacksPromise} />
      </Suspense>
    </>
  );
}

export default App;
