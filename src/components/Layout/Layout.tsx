import React, {PropsWithChildren} from 'react';
import Navbar from "../Navbar/Navbar";
import Search from '../Search/Search';

const Layout: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <>
      <Navbar/>
      <main className="container-md mx-auto">
        <div className="mb-5 pb-5 border-bottom">
          <Search/>
        </div>
        <div className="row bg-danger px-3">
          {children}
        </div>
      </main>
    </>
  );
};

export default Layout;