import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import About from './routes/about/about.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation brand={'metablvk'} />}>
        <Route path='/' index element={<Home />} />
        <Route path='/about' element={<About />} />
      </Route>
    </Routes>
  );
};

export default App;
