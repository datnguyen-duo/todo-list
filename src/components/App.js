import React from "react";
import Joke from "./Joke";
import jokesData from "./jokesData";
// import ToDoItem from "./TodoItem";
// import "../style.css";
// import Navbar from "./Header";
// import MainContent from "./MainContent";
// import Footer from "./Footer";

// function App() {
//   return (
//     <div>
//       <Navbar />
//       <MainContent />
//       <Footer />
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="todo-list">
//       <h1>To Do List</h1>
//       <ToDoItem />
//       <ToDoItem />
//       <ToDoItem />
//       <ToDoItem />
//     </div>
//   );
// }

function App() {
  const jokesComponents = jokesData.map(joke => (
    <Joke key={joke.id} question={joke.question} punchline={joke.punchline} />
  ));
  return jokesComponents;
}

export default App;
