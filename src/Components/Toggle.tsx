import { useAppContext } from "../Contexts/AppContext";
interface CardProps {
  cardId: number;
  isActive: boolean;
}

const Toggle = ({ cardId, isActive }: CardProps) => {
  const { handleToggle } = useAppContext();

  return (
    <label
      className={`inline-block w-[50px] h-[25px] rounded-[25px] relative cursor-pointer transition-colors duration-300 ${
        isActive ? "bg-red-500" : "bg-neutral-400 "
      } 
`}
    >
      <input
        type="checkbox"
        checked={isActive}
        onChange={() => {
          handleToggle(cardId);
        }}
        className="hidden"
      />
      <span
        className={`after:content-[''] after:block after:w-[21px] after:h-[21px] after:rounded-full after:absolute after:top-[2px] after:transition-all after:duration-300 ${
          isActive
            ? "after:translate-x-[27px] after:bg-neutral-0"
            : "after:left-[2px] after:bg-neutral-0"
        } dark:after:bg-neutral-100`}
      ></span>
    </label>
  );
};

export default Toggle;
