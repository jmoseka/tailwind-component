/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';

function App() {
  return (
    <div className="App bg-strongBlue">
      {/* <!-- Global Container --> */}
      <div class="container h-screen px-3 max-w-7xl">

        <div class="desc text-white mt-4 flex flex-col justify-center items-center">
          <p>12 grids / boxes </p>
          <p>Source code <a class="underline underline-offset-2
           hover:text-pink-500 decoration-solid font-semibold" href="#">here</a></p>

          <div class="flex gap-32 md:gap-40 mt-3">
            <div class="div">
              <p>(Desktop version)</p>
              <p>5 columns</p>
              <p>4 rows</p>
            </div>
            <div class="div">
              <p>(Mobile version)</p>
              <p>2 colums </p>
              <p>12 rows</p>

            </div>
          </div>

        </div>

        {/* <!--Grid container--> */}
        <div class="grid-container mt-8  m-auto h-full md:h-4/6 max-w-3xl">

          <div class="h-full w-full px-2 py-2 mx-auto max-w-4xl text-white text-center
     grid grid-cols-2 grid-rows-12 md:grid-cols-5 md:grid-rows-4 gap-2">


            <div class="box-one bg-blue-500 row-span-2 md:col-span-1 md:row-span-2">
              <span class="hidden md:block">row-span-2</span>
            </div>


            <div class="box-one col-span-1 md:col-span-2 bg-white text-black">
              <span class="hidden md:block">col-span-2</span>
            </div>


            <div class="box-one bg-indigo-700 row-span-2 md:row-span-1 md:col-span-1">
              <span class="hidden md:block">col-span-1</span>
            </div>


            <div class="box-one bg-red-500 row-span-2 col-span-1  md:col-span-1 md:row-span-2">
              <div class="hidden md:block">row-span-2</div>
              <div class="hidden md:block">col-span-1</div>
            </div>


            <div class="box-one bg-yellow-500 row-span-1 col-span-1 md:row-span-2">
              <span class="hidden md:block">row-span-2</span>
            </div>


            <div class="box-one bg-slate-600 col-span-2">
              <span class="hidden md:block">col-span-2</span>
            </div>


            <div class="box-one bg-cyan-700 row-span-2 md:row-span-1 md:col-span-1">
              <span class="hidden md:block">col-span-1</span>
            </div>


            <div class="box-one bg-fuchsia-700  row-span-2">
              <span class="hidden md:block">row-span-2</span>
            </div>


            <div class="box-one bg-purple-800 col-span-2">
              <span class="hidden md:block">col-span-2</span>
            </div>


            <div class="box-one bg-red-600 col-span-1 md:col-span-2">
              <span class="hidden md:block">col-span-2</span>
            </div>


            <div class="box-one bg-lime-600 row-span-2 md:row-span-1 md:col-span-1">
              <span class="hidden md:block">col-span-1</span>
            </div>


            <div class="box-one bg-blue-500 md:col-span-1">
              <span class="hidden md:block">col-span-1</span>
            </div>



          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
