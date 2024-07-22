export default function page() {
  return (
    <form className="container my-5">
      <div className="mb-3">
        <label for="exampleInputName" className="form-label">
          Name
        </label>
        <input type="text" className="form-control" id="exampleInputName" />
      </div>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label for="exampleInputText" className="form-label">
          Message
        </label>
        <textarea type="text" className="form-control" id="exampleInputText" />
      </div>
      <button type="submit" className="btn bg-warning text-white">
        Submit
      </button>
    </form>
  );
}
