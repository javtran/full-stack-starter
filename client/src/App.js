import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.scss';

import { AuthContextProvider, AuthProtected } from './AuthContext';
// import Header from './Header';
// import Home from './Home';
// import Login from './Login';
// import PasswordRoutes from './Passwords/PasswordRoutes';
// import Register from './Register';
// import UserRoutes from './Users/UserRoutes';

import Artist from './Artist/Artist';
import Navigation from './Navigation';
import Tracks from './Tracks/Tracks';
import ArtistDetail from './Artist/ArtistDetail';

/* 
starter app()
*/
// function App() {
//   return (
//     <AuthContextProvider>
//       <Router>
//         <Header />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/passwords/*" element={<PasswordRoutes />} />
//           {process.env.REACT_APP_FEATURE_REGISTRATION === 'true' && <Route path="/register" element={<Register />} />}
//           <Route
//             path="/account/*"
//             element={
//               <AuthProtected>
//                 <UserRoutes />
//               </AuthProtected>
//             }
//           />
//         </Routes>
//       </Router>
//     </AuthContextProvider>
//   );
// }

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Navigation />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Artist />} />
            <Route path="/tracks" element={<Tracks />} />
            <Route path="/artists/:id" element={<ArtistDetail />} />
          </Routes>
        </div>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
