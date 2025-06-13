import { useLocalStorage } from "../hooks/useLocalStorage";
function Form() {
  const [name, setName] = useLocalStorage("name", "") 
  const [serviceNumber, setServiceNumber] = useLocalStorage("serviceNumber", "") //use custom hook for input forms

  function handleSubmit(event) {
    event.preventDefault()
    alert("saved!")
  }
  
    return (
      <>
        <form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" data-testid={"name"} value={name} onChange={((event) => setName(event.target.value))}/>
            <label htmlFor="service">Service Number:</label>
            <input type="text" data-testid={"service"} value={serviceNumber} onChange={((event) => setServiceNumber(event.target.value))}/>
            <button type="submit">Save</button>
        </form>
        <h4>{name ? `Welcome, ${name}!` : "Enter your name"}</h4>
      </>
    );
}

export default Form