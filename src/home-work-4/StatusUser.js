import React from 'react';
import { useState, useEffect } from "react";
import { useIsOnline } from './hooks/is-user-oline.js'



export function StatusUser() {
const status = useIsOnline();

  return (
    <div className = 'status-user'>
      <span className={status ? "online" : "offline"}>
        Your status : {status ? "Online" : "Offline"}
      </span>
    </div>
  );
}
