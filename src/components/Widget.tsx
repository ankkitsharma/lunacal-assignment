export default function Widget({ body }: { body?: JSX.Element }) {
  return (
    <div className="w-full h-full relative rounded-[18.89px] px-14 pt-5 bgFrame">
      {body}
      <div
        className={`absolute -bottom-[21px] left-1/2 -translate-x-1/2 w-[70%] h-1 rounded-[2.46px] hr`}
      ></div>
    </div>
  );
}
