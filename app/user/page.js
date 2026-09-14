"use client";

import React, { useEffect, useState } from "react";
export const reValidate=45;

export default function User() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      {cache: "force-cache"}
      const data = await response.json();

      console.log(data);
      setUser(data);
    }
    fetchUsers();
  }, []);

  

  return (
    <div>
      <h1>User Page</h1>
      {user.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
}