// import React from 'react'

const Navbar = () => {
  return (
    <>
      <section>
        {/* desktop navbar */}
        <nav className="hidden sm:flex justify-between border-b px-10 py-3 text-xl shadow-sm">
          <div>E-Shopper</div>
          <div>
            <ul className="flex gap-4">
              <li>Home</li>
              <li>Home</li>
            </ul>
          </div>
        </nav>
      </section>
      <section>
        {/* mobile navbar */}
        <nav className=" flex justify-between sm:hidden px-5 py-2 border-b shadow-sm text-xl">
          <div>E-Shopper</div>
          <div>
            <i className="ri-menu-line"></i>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
