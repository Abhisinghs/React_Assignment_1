import Button from "./components/Button";
import Person from "./components/PersonDetails";


//Define App function
function App(){
  const personName="abhi";
  const personAge=21;
  return (
    <>
      <h1>Welcome to My React Assignment</h1>

      <Person name={personName} age={personAge} />

      <Button text="click Me!" onClick={()=>console.log("Button Clicked")}/>
    </>
  );
}

//export function
export default App;

// remember one thing when your make a component please make first letter capital 
//fragment is used to packup the multiple div tag in one fragment tag  