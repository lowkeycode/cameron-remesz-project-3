import Logo from "./Logo";

// Sign in button gets signIn={redirect} method to use Google authentication. Chose a redirect sign in over a pop up as firebase mentioned it it a better UX on mobile

const SignIn = ({ signIn }) => (
  <div className="sign-in">
    <Logo />
    <p className="sign-in__message">Please sign in to continue...</p>
    <div>
      <button className="sign-in-btn" onClick={signIn}>
        Sign In With Google
      </button>
    </div>
    <div class="created">lowkey created at  
      <span>
        <a href="https://junocollege.com/" target="_blank" rel="noreferrer"> &mdash; Juno College of Technology &mdash;</a>
      </span> 
    </div>
  </div>
);

export default SignIn;
