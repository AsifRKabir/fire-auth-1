import './App.css';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebaseConfig from './firebase.config';

initializeApp(firebaseConfig);

function App() {

  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  const handleSignIn = () => {

    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        // ...
      });
  }

  return (
    <div className="App">

      <button onClick={handleSignIn}>Sign In</button>

    </div>
  );
}

export default App;
