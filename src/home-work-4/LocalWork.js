import { useState, useEffect } from "react";
import { Button } from "semantic-ui-react";
import { Input } from "semantic-ui-react";

export function LocalWork() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const setUser = () => {
    let user = { name: name, age: age };
    localStorage.setItem("user", JSON.stringify(user));
  };

  const getUser = () => {
    let data = localStorage.getItem("user");
    data = JSON.parse(data);
    console.log(data);
  };
  const clearInfo = () =>{
      localStorage.clear();
      setName('');
      setAge('');
  }

  return (
    <div className = "local-work">
      <Input
        focus
        placeholder="Fill name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        focus
        placeholder="Fill age"
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <Button.Group>
        <Button onClick={setUser}>Set user</Button>
        <Button.Or />
        <Button onClick={getUser}>Get user</Button>
        <Button.Or />
        <Button onClick={clearInfo}>Clear</Button>
      </Button.Group>
    </div>
  );
}
