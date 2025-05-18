import Button from "./Button";
import { useAppContext } from "../Contexts/AppContext";
const buttons = ["All", "Active", "Inactive"];
function SmallHeader() {
  const { active, handleActive } = useAppContext();
  return (
    <section className="flex w-full flex-col md:flex-row items-center gap-3 md:justify-between">
      <h1 className="text-dark-to text-3xl font-semibold dark:text-neutral-0">
        Extensions List
      </h1>
      <div className="flex items-center gap-3">
        {buttons.map((label) => (
          <Button
            key={label}
            isActive={active === label}
            onClick={() => handleActive(label)}
          >
            {label}
          </Button>
        ))}
      </div>
    </section>
  );
}

export default SmallHeader;
