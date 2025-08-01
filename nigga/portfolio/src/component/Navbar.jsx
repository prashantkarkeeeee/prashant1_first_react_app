const Nav = () => (
  <nav className="flex gap-180 pl-2.5 bg-yellow-400 p-7">
    <div>
      <p className="text-black pl-15 w-50">PRASHANT KARKI</p>
    </div>
    <div className="flex gap-10">
      <a href="#project" className="text-black">
        Projects
      </a>
       <a href="#skill" className="text-black">
        Skill
      </a>
      <a href="#service" className="text-black">
        services
      </a>
      <a href="#contact" className="text-black">
        Contacts
      </a>
    </div>
  </nav>
);

export default Nav;
