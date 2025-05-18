import Container from "./Components/Container";

const App = () => {
  return (
    <div className="w-full py-5 min-h-screen bg-linear-[180deg] from-light-from from-0% to-light-to to-100% dark:bg-linear-[180deg] dark:from-dark-from dark:to-dark-to flex justify-center ">
      <Container />
    </div>
  );
};

export default App;
