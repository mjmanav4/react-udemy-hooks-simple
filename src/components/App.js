import React, { useState } from "react";
import ResourceList from "./ResourceList";
import UserList from "./UserList";
const App = () => {
  const [resource, setResource] = useState("posts");
  return (
    <div>
      <UserList />
      <div>
        <button onClick={() => setResource("posts")}>POSTS</button>
        <button onClick={() => setResource("todos")}>TODOs</button>
      </div>
      <ResourceList resource={resource} />
    </div>
  );
};
export default App;
