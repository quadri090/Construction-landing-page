import DisplayImages from "./DisplayImages";
import Image1 from "../img/Better.png";
import Icon from "../img/icon.png";
import Icon1 from "../img/icon1.png";
import Icon2 from "../img/icon2.png";
import Icon3 from "../img/icon3.png";
import Icon4 from "../img/icon4.png";
import Icon5 from "../img/icon5.png";
function WhyChooseUs() {
  return (
    <>
      <div className="flex flex-row justify-center items-center">
        <div className="mt-[50px] px-[3px] md:px-[70px] md:mt-[60px]">
          <div className="text-center">
            <h1 className="font-bold text-lg lg:font-semibold lg:text-xl">
              Why Choose us
            </h1>
          </div>
          <div className="flex flex-col md:flex-row justify-betweven">
            <div className="md:w-1/2">
              <DisplayImages name={Image1} classs="w-[494px] h-[388px]" />
            </div>
            <div className="flex flex-col md:w-1/2 mt-2">
              <div className="text-base mt-3 px-[10px]">
                At Eco-builders, we place the client’s needs first and build
                structures that will have a positive impact on their lives.
              </div>
              <div className=" flex flex-row items-center justify-center lg:justify-start lg:w-full">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6 lg:w-full">
                  <div className="text-sm">
                    <DisplayImages name={Icon} />
                    <h1>Eco-friedndly</h1>
                  </div>
                  <div className="text-sm">
                    <DisplayImages name={Icon1} />
                    <h1>Budget friendly</h1>
                  </div>
                  <div className="text-sm">
                    <DisplayImages name={Icon2} />
                    <h1>Strong foundation</h1>
                  </div>
                  <div className="text-sm">
                    <DisplayImages name={Icon3} />
                    <h1>Sustainable solutions</h1>
                  </div>
                  <div className="text-sm">
                    <DisplayImages name={Icon4} />
                    <h1>Extensive research</h1>
                  </div>
                  <div className="text-sm">
                    <DisplayImages name={Icon5} />
                    <h1>Excellent service</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default WhyChooseUs;
