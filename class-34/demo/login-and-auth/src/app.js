import './app.css';
import AuthProvider from './context/authContext';
import Login from './components/auth/login';
import Auth from './components/auth/auth';

function App() {
  return (
    <AuthProvider>
      <Login/>
      <hr/>
      <Auth action="delete">
          <div><a>Fake Delete Link</a></div>
      </Auth>
      <Auth action="update">
          <div><a>Fake Edit Link</a></div>
      </Auth>
      <Auth action="read">
        <div><span>Fake Read Text</span></div>
      </Auth>
    </AuthProvider>
  );
}

export default App;
