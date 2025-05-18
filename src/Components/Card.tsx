import { useAppContext, type Extension } from "../Contexts/AppContext";
import Button from "./Button";
import Toggle from "./Toggle";

const Card = ({ logo, name, description, isActive, id }: Extension) => {
  const { handleRemove } = useAppContext();
  return (
    <div className="bg-neutral-0 w-full h-[13rem] p-4 rounded-2xl grid grid-rows-[1fr_auto] dark:bg-neutral-700 border dark:border-neutral-600 border-neutral-300">
      <div className="flex items-start gap-3">
        <img src={logo} alt="" />
        <div className="flex flex-col gap-2">
          <h1 className="dark:text-neutral-0 text-dark-to text-lg font-semibold">
            {name}
          </h1>
          <p className="dark:text-neutral-400 max-w-[240px] font-medium text-neutral-600 text-[16px]">
            {description}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <Button onClick={() => handleRemove(id)}>Remove</Button>
        <Toggle cardId={id} isActive={isActive} />
      </div>
    </div>
  );
};

export default Card;
