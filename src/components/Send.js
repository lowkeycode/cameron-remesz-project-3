// Label screen reader friendly to prompt comment
// Get value with on change and set to state in App.js
//  Bind input for react cause react is dumb and we have to do it for it

const Send = ({ onChange, value, onSubmit }) => (
  <form className="send" onSubmit={onSubmit}>
    <div className="send__container">
      <label className="sr-only" htmlFor="comment">
        Write your comment here
      </label>
      <input
        type="text"
        id="comment"
        onChange={onChange}
        value={value}
        required
        placeholder="Send a message..."
      />
      <button>Send</button>
    </div>
  </form>
);

export default Send;
