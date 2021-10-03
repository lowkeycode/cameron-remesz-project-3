const Send = () => {
  return (
    <form className="send">
      <div class="send__container">
        <label className ="sr-only" for="comment">Write you comment here</label>
        <input type="text" id="comment"/>
        <button>Send</button>
      </div>
    </form>
  )
}

export default Send
