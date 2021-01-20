import { useState, useEffect } from "react";
import { Button } from "semantic-ui-react";
import { Input } from "semantic-ui-react";
import { useLocalStorage } from './hooks/use-local-storage.js'

export function LocalWork() {

  const [age, setAge] = useLocalStorage('age', '');
  const [name, setName] = useLocalStorage('name', '');
  let user = { name: name, age: age };



  function getUser() {
    console.log(user)
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


        <Button onClick={getUser}>Get user</Button>


    </div>
  );
}
