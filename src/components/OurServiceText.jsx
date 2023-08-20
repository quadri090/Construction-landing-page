function DisplayText({ heading, content }) {
  return (
    <>
      <h1 className="font-medium text-base md:text-lg md:font-semibold">
        {heading}
      </h1>
      <p className="max-w-[353px] font-normal text-sm leading-6 mt-3 md:text-base md:max-w-[541px]">
        {content}
      </p>
    </>
  );
}
export default DisplayText;
