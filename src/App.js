
import "./App.css";
import { Profile } from "./components/profile/Profile";
import { LinkRow } from "./components/linkRow/LinkRow";
import { Socials } from "./components/socials/Socials";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <div className="bg-white mx-auto mt-20 w-[375px] h-[812px] flex flex-col justify-center md:w-full">
        <Profile />
        <LinkRow />
        <Socials />
        <Footer />
      </div>
    </div>
  );
}

export default App;
