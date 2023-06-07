import Person from "./Components/Person/Person";

function App() {

  return (
    <div className="App">
      <Person name='Samir' lastName='Saidov' link={"#"} />
      <Person name='Nigina' lastName='Zokirova' link={"#"} />
      <Person name='Anvar' lastName='Nasullayev' link={"#"}/>
      <Person name='Ilhom' lastName='Islomov' link={"#"}/>
    </div>
  );
}

export default App;
