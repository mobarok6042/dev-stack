import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Stacks from "./components/Stacks";
import Footer from "./components/Footer";
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
      <Suspense
        fallback={
          <div className="flex justify-center items-center min-h-40">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        }
      >
        <Stacks stackPromise={stacksPromise} />
      </Suspense>
      <Footer></Footer>
    </>
  );
}

export default App;
