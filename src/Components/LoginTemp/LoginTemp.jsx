import { Link } from "react-router-dom";

export const LoginTemp = ({ onBlogs = false }) => {
  return (
    <div
      id="login-form"
      className="w-full max-w-[500px] flex flex-col justify-center items-start gap-y-[60px]"
    >
      {onBlogs ? (
        <div
          id="login-form-title"
          className="text-[40px]/[48px] text-red-500 font-semibold mt-10"
        >
          Log in to continue reading..
        </div>
      ) : (
        <div
          id="login-form-title"
          className="text-[40px]/[48px] font-semibold mt-10"
        >
          Log in
        </div>
      )}

      <div
        id="login-form-inputs"
        className="w-full flex flex-col justify-center items-center gap-y-9"
      >
        <div className="w-full flex flex-col justify-center items-start gap-y-4">
          <label
            htmlFor="username"
            className="text-xl font-medium text-[#260000]"
          >
            E-mail
            <span className="text-red-600"> *</span>
          </label>
          <input
            id="username"
            name="username"
            type="email"
            placeholder="Enter your E-mail"
            className="px-6 py-5 w-full rounded-xl border-[#C8C8C8] border-[1px] text-base outline-none"
          />
        </div>
        <div className="w-full flex flex-col justify-center items-start gap-y-4">
          <label
            htmlFor="password"
            className="text-xl font-medium text-[#260000]"
          >
            Password
            <span className="text-red-600"> *</span>
          </label>
          <div className="flex flex-col justify-center items-end w-full gap-y-4">
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              className="px-6 py-5 w-full rounded-xl border-[#C8C8C8] border-[1px] text-base outline-none"
            />
            <a
              href="/users/resetPassword"
              className="text-base text-[#FF5758] cursor-pointer"
            >
              forget password?
            </a>
          </div>
        </div>
      </div>
      
      <div
        id="login-form-action"
        className="w-full flex flex-col justify-between items-center gap-y-2"
      >
        <Link to={'/'}
          id="login-link"
          className="w-full flex justify-center items-center gap-x-2 bg-[#FF5758] px-8 py-6 rounded-md min-w-[280px] hover:scale-105 duration-300 cursor-pointer"
        >
          <div className="text-white text-[25px]/[30px] font-medium flex justify-center items-center gap-x-4 transition-all duration-300">
            Login
          </div>
          {/* Arrow icon placeholder - replace with your preferred icon */}
          <span className="text-white text-lg">→</span>
        </Link>

        <div className="flex text-[25px]/[30px] flex-col lg:flex-row justify-center items-center gap-x-2">
          {onBlogs ? (
            <span>or</span>
          ) : (
            <div className="text-2xl">Don't have an account yet?</div>
          )}
          <a
            href="/signup"
            className="text-[#FF5758] font-medium cursor-pointer"
          >
            Sign up
          </a>
        </div>
        
        {onBlogs && (
          <div className="text-lg">To Join eyedias community</div>
        )}
      </div>
    </div>
  );
};