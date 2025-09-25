import Brand from "../Brand/Brand";
import { LoginTemp } from "../LoginTemp/LoginTemp";

function Login(){
  
  return (
    <section
      id="login"
      className="w-full min-h-screen flex justify-between items-start gap-x-0 mb-24"
    >
      <div
        id="login-form-container"
        className="w-full md:w-1/2 h-full flex justify-center items-center p-5 pt-[100px]"
      >
        <LoginTemp/>
      </div>

      <div
        id="login-brand"
        className="hidden lg:ms-15 md:p-5 bg-[#FF5758] md:w-1/2 min-h-screen md:flex justify-center items-center"
      >
        <Brand width={604} height={197} />
      </div>
    </section>
  );
};
export default Login;