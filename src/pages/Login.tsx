import { useDispatch, useSelector } from "react-redux"
import { login } from "../redux/thunkFunctions/Auth";
import type { RootState } from "../redux/store";
import { Link } from "react-router-dom";

function Login() {
   const dispatch = useDispatch<any >();
    // const auth_check = useSelector(auth)
    // console.log(auth_check)
     const auth = useSelector((state: RootState) => state.auth);
     console.log(auth)
    return (

        <div className="min-h-screen flex items-center justify-center">
            <button onClick={()=>{dispatch(login({email:"abc@abc.abc",password:"Admin!23456"}))}}>Click</button>
            <div className="bg-white/90 p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Login</h2>

                <form action="#" method="POST" className="space-y-4">
                    <div>
                        <label className="block text-sm text-gray-700 mb-1">Email</label>
                        <input type="email" id="email" name="email" required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600" />
                    </div>

                    <div>
                        <label className="block text-sm text-gray-700 mb-1">Password</label>
                        <input type="password" id="password" name="password" required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600" />
                    </div>

                    <button type="submit"
                        className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-700 transition">
                        Sign In
                    </button>
                    <p className="text-center text-sm text-gray-600 mt-6">
                        Don't have an account?
                        <Link to="/register" className="text-gray-800 font-medium hover:underline"> Register</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login