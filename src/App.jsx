import Greeting from "./tasks/greeting/Greeting";
import Message from "./tasks/message/Message";
import Button from "./tasks/button/Button";

export default function App() {
  return (
    <div className="container">
      <Greeting name="Ivan" />
      <Message text="(Click the button to show the message in the console)" />
      <Button attribute={() => console.log("Hello")} />
    </div>
  );
}
