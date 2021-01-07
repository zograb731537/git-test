import React from "react";

export default function List() {
  const users = [
    { id: 1, name: "Иван", surname: "Иванов" },
    { id: 2, name: "Сергей", surname: "Сергеев" },
    { id: 3, name: "Федор", surname: "Стрелков" },
    { id: 4, name: "Михаил", surname: "Петров" },
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
      <div>
        <li key={user.id} style={style}>
          {user.name} , {user.surname}
        </li>
      </div>
    );
  });
  return <ul>{lis}</ul>;
}


