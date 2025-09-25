import { Link } from "react-router-dom";
import { footerContent } from "../../Content/FooterContent";
import Brand from "../Brand/Brand";
// import { subscribing } from '@/services/auth'
// import { PromiseToastTry } from "@/components/global/PromiseToastTry";
// import { InfoToastTry } from "@/components/global/InfoToastTry";
// import Reload from "./Reload";

const Footer = () => {
//   const [loading, setloading] = useState(false);
  
//   const [subscribeEmail, setSubscribeEmail] = useState('');
//   const handleSubscribe = async (event) => {
//     event.preventDefault();
//     try {
//       setloading(true)

//       const payload = {
//         email: subscribeEmail 
//       };
//       const res = await subscribing(payload)
//       console.log(res);

//       if (res?.status == 201) {
//         PromiseToastTry('subscribing', 'subscribed')
//         setSubscribeEmail('');
//       }


//     } catch (error) {
//       InfoToastTry( error.response.data.email&&'An Email is required to subscribe')
//     }
//     finally {
//       setloading(false)
      
//     }
//   };

  return (
    <footer
      id="footer"
      className="w-full flex justify-center items-center bg-[#FF5758] text-white py-16 pt-24"
    >
      <div
        id="footer-container"
        className="w-full max-w-[1062px] flex flex-col md:flex-row justify-center md:justify-between items-start gap-y-10 p-4"
      >
        <div
          id="footer-brand"
          className="w-full max-w-[425px] flex flex-col justify-center items-start gap-y-[42px]"
        >
          <div className="w-full flex flex-col justify-center items-start gap-y-2">
            <Brand width={279} height={87} />
            <div className="text-xl font-semibold">{footerContent.slogan}</div>
          </div>
          <div className="w-full flex flex-col justify-center items-start gap-y-1">
            <div>{footerContent.message01}</div>
            <div>{footerContent.message02}</div>
            <div className="w-full max-w-[480px] flex flex-col sm:flex-row justify-center sm:justify-start items-center gap-3">
              <input name="subscribeEmail"
                placeholder="Enter Your Email to Subscribe"
                type='email'
            //   value={subscribeEmail}
                onChange={(event) => setSubscribeEmail(event.target.value)}
                className="subscribeEmail bg-transparent border-[1px] border-white rounded-[5px] w-full sm:w-[248px] h-[45px] outline-none px-4" />
              <button
                // onClick={handleSubscribe}
                className="w-full sm:w-fit flex justify-center items-center px-2.5 py-[13px] font-medium border-[1px] border-white rounded-[5px] text-[16px]/[19.2px] hover:opacity-80 transition-all duration-300">
                {footerContent.action}
              </button>
            </div>
          </div>
        </div>
        <div
          id="footer-links"
          className="flex flex-col justify-center items-start gap-y-4"
        >
          {footerContent.links.map((link) => (
            <Link
              key={link.id}
              href={link.link}
              className="text-xl font-medium"
            >
              {link.title}
            </Link>
          ))}
        </div>
        <div
          id="footer-socials"
          className="flex flex-col justify-center items-center gap-y-8"
        >
          <div className="text-[25px]/[30px] font-semibold">
            {footerContent.socials.title}
          </div>
          <div className="flex justify-center items-center gap-x-[14px]">
            {footerContent.socials.links.map((link) => (
              <Link
                key={link.id}
                href={link.link}
                className="w-[39px] h-[39px] border-[1px] border-white flex justify-center items-center rounded-full"
                target='_blank'
              >
                <img width={24} height={24} src={link.icon} alt="social media icon" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
