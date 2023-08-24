import Button from "./components/Button";
import Header from "./components/Header";
import Person from "./components/PersonDetails";


//Define App function
function App(){
  const personName="abhi";
  const personAge=21;
  return (
    <>
      <Header title="Welcome to my react Assignment"/>

      <Person name={personName} age={personAge} />

      <Button text="click Me!" onClick={()=>console.log("Button Clicked")}/>
    </>
  );
}

//export function
export default App;

// remember one thing when your make a component please make first letter capital 
//fragment is used to packup the multiple div tag in one fragment tag  