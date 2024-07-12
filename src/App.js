// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Login from './components/pages/Login';
import Register from './components/pages/Register'
import Codigocontrol from './components/pages/Codigocontrol'
import Clientecontrol from './components/pages/Clientecontrol'
import Vcontrol from './components/pages/Vcontrol';
import Scontrol from './components/pages/Scontrol';
import Pcontrol from './components/pages/Pcontrol';
import Home from './components/pages/Home'
import userContext from './components/store/useUserState';
import { useState, useContext , useEffect} from 'react';
import jsCookie from 'js-cookie'; 
import { GlobalStyles } from './GlobalStyles'

function App() {
  const { user, setUser } = useContext(userContext);


  // setUser({username, user_id, company_id}); 

  // console.log('En App')
  // console.log(user)

  return (
    <div className="App">
            <GlobalStyles/>
      <BrowserRouter>
        <Navbar username={user.username} />
        {!user.username ?
          (
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
              {/* <Route path="/login" element={<Login />} /> */}
            </Routes>
          ) : (
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/Vcontrol" element={<Vcontrol />} />
              <Route path="/Pcontrol" element={<Pcontrol />} />
              <Route path="/Scontrol" element={<Scontrol />} />
              <Route path="/Codigocontrol" element={<Codigocontrol />} />
              <Route path="/Clientecontrol" element={<Clientecontrol />} />
              <Route path="*" element={<Home />} />
            </Routes>
          )}
      </BrowserRouter>
    </div>
  );
}

export default function RootApp() {
  // const userContext = createContext(null);
  const [user, setUser] = useState({ username: null, user_id: -1, company_id: -1 });
  // js-cookies를 이용해서 사용할 수 있는 쿠키들이 존재하는지 확인한다. 
  // 그리고 값을 대응한다. 
  useEffect(() => {
    const username = jsCookie.get('username'); 
    const user_id = jsCookie.get('user-id'); 
    const company_id = jsCookie.get('company-id'); 

    console.log(username); 
    console.log(user_id); 
    console.log(company_id); 

    setUser({username, user_id, company_id}); 
  }, []); 


  return (
    <userContext.Provider value={{ user, setUser }}>
      <App />
    </userContext.Provider>
  );
}

// export default App;