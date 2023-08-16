import React from "react";

export default function Btn(props) {
  return (
    <>
      <button
        className={`${props.width} py-[10px] px-[20px] rounded-[4px] text-[#FFF] text-[16px] font-roboto font-medium bg-primary-green`}
      >
        {props.text}
      </button>
    </>
  );
}
