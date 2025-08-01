const About = () => (
  <div className="flex justify-between h-100 bg-blue-50">
    <div className="pl-17 w-150 mt-5">
      <p className="text-2xl text-amber-400">Frontend Developer</p>
      <p className="font-serif text-4xl mt-3">Hello, my name </p>
      <p className="font-serif text-4xl ">is Prashant Karki!!!</p>
      <p className="mt-3">
        I am a frontend developer, I specialize in HTML, CSS, JAVASCRIPT, and
        modern framework like REACT.I enjoy turning design concept into clean,
        functional code and contionously learninng new technology to enhance
        user experience.{" "}
      </p>
      <div className="flex gap-4 mt-3 p-1.5">
        <button className="bg-amber-300 rounded pl-4.5 pr-4.5 pt-1.5 pb-1.5">
          <a href="#project">Projects</a>
        </button>
        <button className="rounded border border-amber-300 pl-4.5 pr-4.5 pt-1.5 pb-1.5">
          <a href="">Linkedin</a>
        </button>
      </div>
    </div>
    <div>
      <img src="./images/logo.png" alt="logo" className="h-155 pb-35 pt-1 " />
    </div>
  </div>
);
export default About;
