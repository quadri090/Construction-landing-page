import DisplayImages from "./DisplayImages";
import DisplayText from "./OurServiceText";
import BtnOurService from "./BtnOurService";
import Image1 from "../img/office_buildings.png";
import Image2 from "../img/mansions.png";
import Image3 from "../img/eco-houses.png";
import Image4 from "../img/office_buildings_mobile.png";
import Image5 from "../img/masions_mobile.png";
import Image6 from "../img/eco-house_mobile.png";

function OurService(props) {
  return (
    <>

      <div className="flex flex-row justify-center px-2.5" id='Services' aria-labelledby='Services'>
        <div className="flex flex-col ">
          <div className="">
            <h1 className=" font-semibold sm:text-[22px] text-2xl text-center">
              Our Services
            </h1>
            <h1 className="hidden italic text-base text-center font-normal lg:block">
              Let's partner up and start realizing your dream building.
            </h1>
          </div>
          <div className="lg:hidden mt-5">
            <p className="font-medium text-sm leading-7">
              At Eco-builders, we place the client needs first and build
              structures that will have a positive impact on their lives. Below
              are a few types of structures we specialize in:
            </p>
            <ul className="list-disc list-inside font-semibold text-sm px-1.5 leading-7">
              <li>Office buildings</li>
              <li>Mansions</li>
              <li>Eco houses</li>
            </ul>
          </div>
          <div className="flex flex-col justify-between items-center">
            <div className="flex flex-col lg:flex-row justify-between mt-12">
              <div className="hidden md:block lg:block">
                <DisplayImages
                  name={Image1}
                  classs="sm:w-[359px] sm:h-[215.2px] md:w-[470px] md:h-[366px] rounded-md"
                />
              </div>
              <div className="block md:hidden lg:hidden">
                <DisplayImages
                  name={Image4}
                  classs="w-[359px] sm:h-[215.2px] md:w-[470px] md:h-[366px] rounded-md"
                />
              </div>
              <div>
                <DisplayText
                  heading="Office buildings"
                  content="We build elegant office buildings that can be custom-made to suit your office needs at an affordable price."
                />
                <BtnOurService
                  name="Learn more"
                  classs="w-[147px] py-[10px] px-[20px] rounded-[4px] text-primary-green text-[16px] font-roboto font-medium bg-[#FFF] border-2 border-primary-green mt-4"
                />
              </div>
            </div>

            <div className="flex flex-col-reverse lg:flex-row justify-between mt-12">
              <div>
                <DisplayText
                  heading="Mansions"
                  content="We build mansions that can be custom-made to suit your unique preferences."
                />
                <BtnOurService
                  name="Learn more"
                  classs="w-[147px] py-[10px] px-[20px] rounded-[4px] text-[#FFF] text-[16px] font-roboto font-medium bg-primary-green mt-4"
                />
              </div>
              <div className="hidden md:block lg:block">
                <DisplayImages
                  name={Image2}
                  classs="sm:w-[359px] sm:h-[215.2px] md:w-[470px] md:h-[366px] rounded-md"
                />
              </div>
              <div className="block md:hidden lg:hidden">
                <DisplayImages
                  name={Image5}
                  classs="w-[359px] h-[215.2px] md:w-[470px] md:h-[366px] rounded-md"
                />
              </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between mt-12">
              <div className="hidden md:block lg:block">
                <DisplayImages
                  name={Image3}
                  classs="w-[359px] h-[215.2px] md:w-[470px] md:h-[366px] rounded-md"
                />
              </div>
              <div className="sm:block md:hidden lg:hidden">
                <DisplayImages
                  name={Image6}
                  classs="w-[359px] h-[215.2px] md:w-[470px] md:h-[366px] rounded-md"
                />
              </div>
              <div>
                <DisplayText
                  heading="Eco houses"
                  content="We build houses that are eco-friendly and help bring a serene environment for any outdoor activity."
                />
                <BtnOurService
                  name="Learn more"
                  classs="w-[147px] py-[10px] px-[20px] rounded-[4px] text-[#FFF] text-[16px] font-roboto font-medium bg-primary-green mt-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default OurService;
