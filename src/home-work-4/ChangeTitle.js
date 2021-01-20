import React from "react";
import { useState, useEffect } from "react";
import { Input } from "semantic-ui-react";
import { Button } from "semantic-ui-react";
import { useDocumentTitle } from './hooks/use-document-title.js'

export function ChangeTitle() {
  const [name, setTitleName] = useState("");
  return (
    <div>
      <Input
        focus
        placeholder="Fill title name"
        type="text"
        value={name}
        onChange={(e) => setTitleName(e.target.value)}
      />
      <Button onClick={useDocumentTitle(name)}>Change title page</Button>
    </div>
  );
}
