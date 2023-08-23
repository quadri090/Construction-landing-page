import DisplayImages from "./DisplayImages";
import email from "../img/email.png";
import facebook from "../img/Facebook.svg";
import instagram from "../img/Instagram.svg";
import phone from "../img/Phone.png";
import twitter from "../img/Twitter.png";
import spacer from "../img/Spacer Icon.png";
import Linkedin from "../img/Linkedin.png";
// import bg from "../img/footerbg.png";

function Footer() {
  return (
    <>
      <div className="bg-black  md:bg-[#212121] lg:bg-white md:bg-my-backgound bg-repeat-y text-base flex text-white lg:h-[295.78px]">
        <div className="flex flex-col space-y-4 lg:flex-row justify-between lg:w-[1304px] px-10 pb-5  mt-10">
          <div className="max-w-[282px] flex flex-col">
            <div className="font-bold">Eco-builders</div>
            <div>Have an idea? Reach out to us and let’s talk about it.</div>
          </div>

          <div className="flex flex-col">
            <div className="font-bold">Quick links:</div>
            <a href="#">Home</a>
            <a href="#">Service</a>
            <a href="#">About Us</a>
            <a href="#">Contact Us</a>
          </div>

          <div className="flex flex-col">
            <div className="font-bold">Support</div>
            <div className="flex flex-col">
              <a href="#">Getting started</a>
              <a href="#">Help center</a>
            </div>
          </div>

          <div className="flex flex-col sm:min-w-[288px]">
            <div className="font-bold">Contact us:</div>
            <div className="flex items-center">
              <DisplayImages name={email} classs="w-[20px] h-[20px] mr-1" />{" "}
              info@ecobuilders.com
            </div>
            <div className="flex items-center">
              <DisplayImages name={phone} classs="w-[20px] h-[20px] mr-1" />{" "}
              +234 712 345 678
            </div>
            <div className="flex items-center">
              <DisplayImages name={spacer} classs="w-[20px] h-[20px] mr-1" />
              Nairobi
            </div>
            <div className="flex gap-10 md:gap-[2] mt-4">
              <DisplayImages name={twitter} classs="w-[30px] h-[30px]" />
              <DisplayImages name={facebook} classs="w-[30px] h-[30px]" />
              <DisplayImages name={instagram} classs="w-[30px] h-[30px]" />
              <DisplayImages name={Linkedin} classs="w-[30px] h-[40px]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
