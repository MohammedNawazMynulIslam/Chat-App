import { Link } from "react-router-dom"

export const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">

      <h1 className="text-3xl font-semibold text-center text-gray-300">Login <span className="text-blue-500">ChatsApp</span></h1>

      <form >
        <div>
          <label className="label p-2">
            <span className="text-base label-text">Username </span>
          </label>
          <input type="text" placeholder="Enter Username" className="w-full input input-bordered h-10"></input>
        </div>
        <div>
          <label className="label">
          <span className="text-base label-text">Password</span>
        </label>
        <input type="password" placeholder="Enter password" className="w-full input input-bordered h-10"></input>
        </div>
        <Link to="/signup" className="text-sm text-start text-white hover:underline hover:text-blue-600 mt-2 inline-block">{"Dont"} have an account</Link>
        <div>
          <button className="btn btn-block btn-sm mt-2">Login</button>
        </div>
      </form>
      </div>

      </div>
  )
}
