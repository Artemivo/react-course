import React from "react";
import { useState, useEffect } from "react";
import { Input } from "semantic-ui-react";
import { Button } from "semantic-ui-react";

export function ChangeTitle() {
  const [name, setTitleName] = useState("");

  function useDocumentTitle() {
    let titleText = document.querySelector("title");
    titleText.innerHTML = name;
  }
  return (
    <div>
      <Input
        focus
        placeholder="Fill title name"
        type="text"
        value={name}
        onChange={(e) => setTitleName(e.target.value)}
      />
      <Button onClick={useDocumentTitle}>Change title page</Button>
    </div>
  );
}
