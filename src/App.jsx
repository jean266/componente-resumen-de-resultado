
import { useState, useEffect } from "react"
import { getResult } from "./helpers";
import Category from "./components/Category"

function App() {

  const [ data, setData ] = useState(null);

  const urlCurrent = window.location.href;

  useEffect( () => {
    const getData = async () => {
      try {
        const anwser = await fetch(`${urlCurrent}/public/data.json`);
        const result = await anwser.json();
        return setData(result)
      } catch (error) {
        console.error(error);
      }
    }
    getData();
  }, []);

  return (
    <>
      <div className="sm:flex sm:max-w-screen-xl sm:shadow-[0_20px_25px_-5px_rgb(46,43,233,0.1),_0_-4px_10px_0px_rgb(46,43,233,0.1)] rounded-2xl">
        <header className="flex flex-col items-center p-5 sm:p-10 bg-gradient-to-b from-blue-slate to-blue-royal rounded-b-3xl sm:rounded-3xl text-lavender-light sm:max-w-sm w-full">

          <h2 className="text-sm sm:text-xl">Your Result</h2>

          <div className="py-10 text-center sm:py-12 px-12 sm:px-14 bg-gradient-to-b from-violet-blue rounded-full mt-8">
            <p className="text-5xl sm:text-6xl font-extrabold text-white">{getResult(data)}</p> 
            <span>of 100</span>
          </div>

          <div className="max-w-80">
            <h3 className="text-2xl text-center mt-10 text-white font-bold mb-4">Great</h3>
            <p className="sm:text-center text-left"> You scored higher than 65% of the people who have taken these tests.</p>
          </div>

        </header>

        <main className="sm:w-96">

          <div className="text-gray-blue-dark p-5 sm:p-10">
            <h2 className="font-extrabold text-lg mb-5">Summary</h2>

            {data &&
              <Category 
              data={data}
            />}

            <button 
              type="button"
              className="bg-gray-blue-dark p-3 text-white font-bold w-full block rounded-full hover:bg-gradient-to-b hover:from-blue-slate hover:to-blue-royal "
            >Continue</button>
            
          </div>

        </main>
      </div>
    </>
  )
}

export default App
