import React, {PropsWithChildren} from 'react';
import Navbar from "../Navbar/Navbar";
import SearchBlock from '../../containers/SearchBlock/SearchBlock';

const Layout: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <>
      <Navbar/>
      <main className="container-md mx-auto">
          <SearchBlock/>
        <div className="row bg-danger px-3">
          {children}
        </div>
      </main>
    </>
  );
};

export default Layout;