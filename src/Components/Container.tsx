import Header from "./Header";
import SmallHeader from "./SmallHeader";
import Wrapper from "./Wrapper";

function Container() {
  return (
    <div className="mx-auto w-[95%] md:w-[90%] lg:w-[80%] h-full grid grid-rows-[auto_auto_1fr] gap-10">
      <Header />
      <SmallHeader />
      <Wrapper />
    </div>
  );
}

export default Container;
