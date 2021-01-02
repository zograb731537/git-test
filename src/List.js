import React from "react";

export default function List() {
  const users = [
    { id: 1, name: "Иван", surname: "Иванов" },
    { id: 2, name: "Петр", surname: "Петров" },
    { id: 3, name: "Сергей", surname: "Сергеев" },
    { id: 4, name: "Михаил", surname: "Михайлов" },
  ];


  const lis = users.map((user, index) => {
    const even = index % 2 === 0;
    let style = {};
    if (even) {
      style = {
        color: "white",
        background: "black",
      };
    }
    return (
      <li key={user.id} style={style} >
        {user.name} {user.surname}
      </li>
    );
  });
  return <ul>{lis}</ul>;
}
