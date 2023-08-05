/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';

function App() {
  return (
    <div className="App md:h-screen bg-strongBlue">
      {/* <!-- Global Container --> */}
      <div class="container px-3 max-w-7x">

        <ul class="desc text-white pt-6 flex flex-col items-start ">
          <li>12 grid / boxes </li>
          <li> Desktop version- 5rows 4 columns </li>
          <li>Mobile version - 10rows 2 columns</li>
          <li>Source code <a class="underline underline-offset-2
           hover:text-pink-500 decoration-solid font-semibold" target='_blank' href="https://github.com/jmoseka/tailwind-component/blob/main/src/App.js" rel="noreferrer">here</a></li>

        </ul>

        {/* <!--Grid container--> */}
        <div class="grid-container mt-8  m-auto md:h-4/6 max-w-3xl ">

          <div class=" w-full py-2 mx-auto max-w-4xl text-white text-center
     grid grid-cols-2 md:grid-cols-5 grid-rows-10 gap-2">


            <div class="grid-box bg-blue-500 row-span-2 md:col-span-1 md:row-span-2">
              <span class="hidden md:block">row-span-2</span>
            </div>


            <div class="grid-box col-span-1 md:col-span-2 bg-white text-black">
              <span class="hidden md:block">col-span-2</span>
            </div>


            <div class="grid-box bg-indigo-700 row-span-2 md:row-span-1 md:col-span-1">
              <span class="hidden md:block">col-span-1</span>
            </div>


            <div class="grid-box bg-red-500 row-span-2 col-span-1  md:col-span-1 md:row-span-2">
              <div class="hidden md:block">row-span-2</div>
              <div class="hidden md:block">col-span-1</div>
            </div>


            <div class="grid-box bg-yellow-500 row-span-1 col-span-1 md:row-span-2">
              <span class="hidden md:block">row-span-2</span>
            </div>


            <div class="grid-box bg-slate-600 col-span-2">
              <span class="hidden md:block">col-span-2</span>
            </div>


            <div class="grid-box bg-cyan-700 row-span-2 md:row-span-1 md:col-span-1">
              <span class="hidden md:block">col-span-1</span>
            </div>


            <div class="grid-box bg-fuchsia-700  row-span-2">
              <span class="hidden md:block">row-span-2</span>
            </div>


            <div class="grid-box bg-purple-800 col-span-2">
              <span class="hidden md:block">col-span-2</span>
            </div>


            <div class="grid-box bg-red-600 col-span-1 md:col-span-2">
              <span class="hidden md:block">col-span-2</span>
            </div>


            <div class="grid-box bg-lime-600 row-span-2 md:row-span-1 md:col-span-1">
              <span class="hidden md:block">col-span-1</span>
            </div>


            <div class="grid-box bg-blue-500 md:col-span-1">
              <span class="hidden md:block">col-span-1</span>
            </div>



          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
