import Logo from './Logo';

const SignIn = ({signIn}) => (
  <div className="sign-in">
    <Logo/>
    <p className="sign-in__message">Please sign in to continue...</p>
    <div>
      <button className="sign-in-btn" onClick={signIn}>Sign In With Google</button>
    </div>
  </div>
)


export default SignIn;
