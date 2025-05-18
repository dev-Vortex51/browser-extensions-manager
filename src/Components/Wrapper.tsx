import { useAppContext } from "../Contexts/AppContext";
import Card from "./Card";

function Wrapper() {
  const { extension } = useAppContext();
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center">
      {extension.map(({ name, logo, description, isActive, id }) => (
        <Card
          key={id}
          id={id}
          logo={logo}
          name={name}
          description={description}
          isActive={isActive}
        />
      ))}
    </div>
  );
}

export default Wrapper;
