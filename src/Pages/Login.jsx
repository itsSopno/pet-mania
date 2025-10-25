import React, { useContext, useState } from 'react';
import { AuthContext } from '../AuthContext';
import { useNavigate } from 'react-router';
import { signInWithPopup, GoogleAuthProvider, sendPasswordResetEmail } from 'firebase/auth';
import auth from '../firebase.init';

const provider = new GoogleAuthProvider();

const Login = () => {
  const { createUser, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setLoading(true);
    try {
      const result = await createUser(email, password);
      setUser(result.user);
      navigate("/home");
    } catch (error) {
      console.error("Login failed:", error.message);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      navigate("/home");
    } catch (error) {
      console.error("Google login failed:", error.message);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async () => {
    const email = prompt("Please enter your email for password reset:");
    if (!email) return;

    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset email sent! Check your inbox.");
    } catch (error) {
      console.error("Password reset failed:", error.message);
      alert(error.message);
    }
  };

  return (
  <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-[#27187e] relative gap-9 px-4 md:px-8">
  <h2 className="text-3xl md:text-4xl font-extrabold text-[#F7F7FF] mb-10 uppercase tracking-wide font-sans text-center">
    WELCOME TO PET
  </h2>

  <fieldset className="bg-[#F7F7FF] border-base-300 rounded-box w-full max-w-sm border p-6 shadow-md text-[#27187E]">
    <legend className="text-lg font-semibold text-center mb-4"></legend>
    <form onSubmit={handleLogin} className="flex flex-col gap-3">
      <label className="label">Email</label>
      <input 
        type="email" 
        name="email" 
        className="input input-bordered bg-[#F7F7FF]" 
        placeholder="Email" 
        required 
      />

      <label className="label">Password</label>
      <input 
        type="password" 
        name="password" 
        className="input input-bordered bg-[#F7F7FF]" 
        placeholder="Password" 
        required 
      />

      <button 
        type="submit" 
        className="btn btn-neutral mt-4 rounded-bl-lg"
      >
        Login
      </button>

      <button 
        onClick={handleGoogle} 
        type="button" 
        className="btn btn-outline mt-2"
      >
        Continue with Google
      </button>

      <button
        type="button"
        onClick={handleResetPassword}
        className="btn btn-link mt-2 text-blue-600 underline"
      >
        Forgot Password?
      </button>
    </form>
  </fieldset>

  {loading && (
    <div className="fixed inset-0 bg-white/70 flex items-center justify-center z-50">
      <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
    </div>
  )}
</div>

  );
};

export default Login;
