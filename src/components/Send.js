const Send = ({ onChange, value, onSubmit }) => (
  <form className="send" onSubmit={onSubmit}>
    <div className="send__container">
      <label className="sr-only" htmlFor="comment">
        Write you comment here
      </label>
      <input
        type="text"
        id="comment"
        onChange={onChange}
        value={value}
        placeholder="Send a message..."
      />
      <button>Send</button>
    </div>
  </form>
);

export default Send;
