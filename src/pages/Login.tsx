import { useDispatch, useSelector } from "react-redux"
import { login } from "../redux/thunkFunctions/Auth";
import type { RootState } from "../redux/store";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch<any>();
    // const auth_check = useSelector(auth)
    // console.log(auth_check)
    const auth = useSelector((state: RootState) => state.auth);
    console.log(auth)
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData)
        // const result = await dispatch(login(formData));
        // email: "abc@abc.abc", password: "Admin!23456" }
        const result = await dispatch(login(formData));

        if (login.fulfilled.match(result)) {
            navigate('/');
        }
    };

    return (

        <div className="min-h-screen flex items-center justify-center">

            <div className="bg-white/90 p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Login</h2>

                <form onSubmit={handleSubmit} action="#" method="POST" className="space-y-4">
                    <div>
                        <label className="block text-sm text-gray-700 mb-1">Email</label>
                        <input type="email" name="email" onChange={handleChange} required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600" />
                    </div>

                    <div>
                        <label className="block text-sm text-gray-700 mb-1">Password</label>
                        <input type="password" name="password" onChange={handleChange} required
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