import DisplayImages from "./DisplayImages";
import dd from "../img/office buildings.png"
function OurService(props) {
  return (
    <>
      <div className="w-full flex flex-row justify-center px-2.5">
        <div className="sm:w-[359px] md:w-[758px] lg:w-[1128px]">
          <div className="justify-center">
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
            <ul className="list-disc list-inside font-semibold text-sm px-1.5">
              <li>Office buildings</li>
              <li>Mansions</li>
              <li>Eco houses</li>
            </ul>
          </div>
          <div>
            <div>
            <DisplayImages name={dd} classs='pt-7'/>
              
            </div>
            {/* <img src={dd} alt="" /> */}
          </div>
        </div>
      </div>
    </>
  );
}
export default OurService;
