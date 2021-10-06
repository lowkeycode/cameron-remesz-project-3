import { getAuth, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

const auth = getAuth();

// Using redirect as docs mentioned its better for mobile instead of a popup. Make it a definition of a function to pass as props
const redirect = () => {
  signInWithRedirect(auth, provider)
};

export default redirect;
