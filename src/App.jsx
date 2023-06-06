import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './Pages/Layout';
import { Details } from './Pages/Details';
import './style/loader.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} >
            <Route path=":id" element={<Details />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;