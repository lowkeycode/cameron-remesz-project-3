const Send = () => {
  return (
    <form className="send">
      <div className="send__container">
        <label className ="sr-only" htmlFor="comment">Write you comment here</label>
        <input type="text" id="comment"/>
        <button>Send</button>
      </div>
    </form>
  )
}

export default Send
