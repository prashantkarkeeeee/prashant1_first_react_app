const Project = () => (
  <div className="bg-blue-50 p-20" id="project">
    <p
      className="text-center text-2xl  "
      style={{ textDecoration: "underline" }}
    >
      Projects
    </p>
    <div>
      <div className="flex justify-between w-200 h-[308px] ml-40 mt-20 shadow-2xl rounded-2xl overflow-hidden">
        <div className="w-100 p-2 bg-white ">
          <p className="mt-7.5 text-3xl font-semibold pl-2">Calculator</p>
          <p className="mt-5.5 pl-2">
            This project helps solidify understanding of input handling, basic
            arithmetic operations, and displaying results dynamically. It
            reinforces the connection between user input and visual output.
          </p>
          <button className="mt-15 border border-black rounded-2xl pl-4.5 pr-4.5 pt-1.5 pb-1.5 ml-30">
            <a href="">view project</a>
          </button>
        </div>
        <div className="w-100 rounded-2xl">
          <img
            src="./images/calculator.png"
            alt="calculator"
            className="h-77 w-100"
          />
        </div>
      </div>
    </div>
         
    <div>
      <div className="flex justify-between w-200 h-77 ml-40 mt-20 shadow-2xl rounded-2xl overflow-hidden bg-white">
         
          <img
            src="./images/to-do-list.png"
            alt="calculator"
            className=" w-[400px] relative right-5"
          />
      
        <div className="w-100">
          <p className="mt-7.5 text-3xl font-semibold pl-2">To-Do List</p>
          <p className="mt-5.5 pl-2 mr-3">
            This project helps in enhancing organizaation, productivity, and reducing stress by providing
            a clear overview of the task, manage time effectively, and track progress, ultimately leading 
            to greater sense of accomplishment. 
          </p>
          <button className="mt-10 border border-black rounded-2xl pl-4.5 pr-4.5 pt-1.5 pb-1.5 ml-30">
            <a href="">view project</a>
          </button>
        </div>
      </div>
    </div>   
    
       
      <div className="flex justify-between w-200 h-[320px] ml-40 mt-20 shadow-2xl rounded-2xl overflow-hidden">
        <div className="w-100 p-4 bg-white"  >
          <p className="mt-7.5 text-3xl font-semibold">Weather App</p>
          <p className="mt-5.5 pr-4">
           This project offer detail like temperature, pricipetation, wind speed ,
           and other relevant data, helping user plan their day or activity.It also provide a alert 
           for sveral weaather condition like strom or heavy rain,
          </p>
          <button className="mt-10 border border-black rounded-2xl pl-4.5 pr-4.5 pt-1.5 pb-1.5 ml-30">
            <a href="">view project</a>
          </button>
        </div>
        
          <img
            src="./images/weather.jpg"
            alt="calculator"
            className="w-[399px] "
          />
        
      </div>
    </div>
  
);
export default Project;
