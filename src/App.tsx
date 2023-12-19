import Layout from './components/Layout/Layout';
import {Route, Routes} from 'react-router-dom';
import Home from './containers/Home/Home';
import Shows from './containers/Shows/Shows';

function App() {
  
  return (
    <>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={<Home/>}
          />
          <Route
            path="/shows"
            element={<Home/>}
          />
          <Route
            path="/shows/:id"
            element={<Shows/>}
          />
          <Route
            path="*"
            element={(<h1>Show Not Found!</h1>)}
          />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
