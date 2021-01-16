import React from 'react';
import { useState, useEffect } from "react";


export function StatusUser() {
  const [status, userHasNetwork] = useState([]);
  useEffect(() => {
    window.addEventListener("load", () => {
      userHasNetwork(navigator.onLine);
    });

    window.addEventListener("online", () => {
      userHasNetwork(true);
    });
    window.addEventListener("offline", () => {
      userHasNetwork(false);
    });
  });

  return (
    <div className = 'status-user'>
      <span className={status ? "online" : "offline"}>
        Your status : {status ? "Online" : "Offline"}
      </span>
    </div>
  );
}
