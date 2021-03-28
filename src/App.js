import "./App.css";
import Header from "./components/Header";

function App() {
  var titles = [
    "Let That Sh*t Go",
    "You Are Allowed to Feel This Way",
    "Your Feelings Are Valid",
    "Do Not Let This Fester",
    "Forgive Yourself",
    "You Don't Have to Carry This",
    "There's Darkness, But There's Light Too",
    "Speak Your Truth",
    "Say What You Need To Say",
    "We're Here to Listen",
    "This is YOUR Story. You're the Main Character.",
    "It Takes a Lot of Strength to Let Go",
    "Drop That Pain & Never Look Back",
    "Shout, Scream, Shake It, Let It Go",
    "Sometimes Sharing Your Pain Is Exactly What You Need",
    "This is You Choosing To Be Brave",
    "Your Pain is the Breaking of the Shell That Encloses Your Understanding",
    "You Aren't Alone",
    "Don't Stay Here, Push Forward",
    "No Need to Bite Your Tongue Here",
    "You Don't Have to Face This Silently",
  ];
  var title = titles[Math.floor(Math.random() * titles.length)]; // pick random item

  return (
    <div className="App">
      <Header />
      <p>
        Welcome, friend. This is where anonymity meets compassion. Pour your
        heart out in this safe space. No judgements. Scream into the void.
      </p>
      <h1>{title}</h1>
      <div className="post">
        <input type="textarea" />
        <button>RELEASE</button>
      </div>
      <section>
        <div className="submissions">
          <p className="sub-text">post goes here</p>
        </div>
      </section>
    </div>
  );
}

export default App;
