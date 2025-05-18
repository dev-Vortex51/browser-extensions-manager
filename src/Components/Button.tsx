interface ButtonProps {
  children: string;
  isActive?: boolean;
  onClick?: () => void;
}

function Button({ children, isActive, onClick }: ButtonProps) {
  const baseClasses =
    "cursor-pointer hover:bg-red-500 hover:border-red-500 focus:ring-2 focus:ring-red-500 dark:focus:ring-offset-neutral-700 hover:text-neutral-0 transition-colors duration-300 dark:hover:text-dark-to py-3 px-6 rounded-3xl font-semibold ";

  const activeClasses = isActive
    ? "bg-red-500 text-neutral-0  dark:text-dark-to  border-red-500   focus:ring-offset-2 "
    : "bg-neutral-0 dark:bg-neutral-700 dark:text-neutral-0 text-dark-to border dark:border-neutral-600 border-neutral-300";

  return (
    <button onClick={onClick} className={`${baseClasses} ${activeClasses}`}>
      {children}
    </button>
  );
}

export default Button;
