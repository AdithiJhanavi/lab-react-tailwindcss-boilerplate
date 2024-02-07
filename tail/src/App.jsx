import "./App.css";
import Message from "./component/message";
import Button from "./component/button";
import Card from "./component/card";
import Foot from "./component/foot";
import Navbar from "./component/navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Button />
      <Message />
      <Card />
      <Foot />
    </div>
  );
}

export default App;