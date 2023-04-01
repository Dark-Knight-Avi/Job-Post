import Home from "./pages/Home";

const App = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // const togglePopup = () => {
  //   setIsOpen(!isOpen);
  // };
  return (
    <div>
      {/* <input type="button" value="Create a Job" onClick={togglePopup} /> */}
      <Home />
      {/* {isOpen && <Step1 handleClose={togglePopup} />} */}
    </div>
  );
};

export default App;
