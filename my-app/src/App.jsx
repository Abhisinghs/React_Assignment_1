import Button from "./components/Button";
import Header from "./components/Header";
import List from "./components/List";
import Person from "./components/PersonDetails";



//Define App function
function App(){
  const personName="abhi";
  const personAge=21;

  const list=["item1","item2","item3","item4"]
  return (
    <>
      <Header title="Welcome to my react Assignment"/>

      <Person name={personName} age={personAge} />

      <Button text="click Me!" onClick={()=>console.log("Button Clicked")}/>

      <List items={list} />
    </>
  );
}

//export function
export default App;

// remember one thing when your make a component please make first letter capital 
//fragment is used to packup the multiple div tag in one fragment tag  