import { getAuth, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

const auth = getAuth();

// Using redirect as docs mentioned its better for mobile instead of a popup
const redirect = () => {
  signInWithRedirect(auth, provider)
};

export default redirect;
