// import React from 'react'

const Navbar = () => {
  return (
    <>
      <section className="sticky top-0 left-0 right-0 z-10 hidden border-b shadow-sm py-3 sm:block">
        {/*  desktop navbar  */}
        <nav className="flex justify-between gap-2 px-4">
          <div>
            <p className=" text-right font-bold ">E-Shopper</p>
          </div>

          <div id="nav">
            <ul>
              <li className="inline p-2 text-lg">
                <a href="#">Home</a>
              </li>
              <li className="inline p-2 text-lg">
                <a href="#about">About</a>
              </li>

              <li className="inline p-2 text-lg">
                <a href="#skills">Skills</a>
              </li>
              <li className="inline p-2 text-lg">
                <a href="#services">Services</a>
              </li>
              <li className="inline p-2 text-lg">
                <a href="#portfolio">Portfolio</a>
              </li>
              <li className="inline p-2 text-lg">
                <a href="#contact">Contact me</a>
              </li>
            </ul>
          </div>
        </nav>
      </section>
      <section>
        {/*  mobile nav  */}
        <nav className="sticky z-20 w-full px-4 mt-2 bg-transparent sm:hidden border-b shadow-sm py-1.5" id="mobinav">
          <div className="px-4 ">
            <div className="flex justify-between">
              <h1 className="  text-base sm:text-xl  ">E-Shopper</h1>
              <p className="text-2xl" onClick="mobNav">
                <i className="cursor-pointer ri-menu-line" id="mnavo"></i>
                <i className="cursor-pointer ri-close-line" id="mnavc"></i>
              </p>
            </div>
            <div id="mobnav" className="text-base p-4 fixed border ml-2 shadow-sm top-14  left-0 pt-1 w-[50%] rounded-lg">
              <ul>
                <li className="p-2">
                  <a href="#" onClick="mobNav" className="text-xl ">
                    Home
                  </a>
                </li>
                <li className="p-2">
                  <a href="#about" onClick="mobNav" className="text-xl ">
                    About
                  </a>
                </li>
                <li className="p-2">
                  <a href="#skills" onClick="mobNav" className="text-xl ">
                    Skills
                  </a>
                </li>
                <li className="p-2">
                  <a href="#services" onClick="mobNav" className="text-xl ">
                    Services
                  </a>
                </li>
                <li className="p-2">
                  <a href="#portfolio" onClick="mobNav" className="text-xl ">
                    Portfolio
                  </a>
                </li>
                <li className="p-2">
                  <a href="#contact" onClick="mobNav" className="text-xl ">
                    Contact me
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
