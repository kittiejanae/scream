import React from "react";
import "./App.css";
import Header from "./components/Header";

class App extends React.Component {
  state = {
    titles: [
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
    ],
    comments: [{ id: 1, text: "hi" }],
    newComment: [{ id: "", text: "" }],
  };

  createNewComment = (event) => {
    this.setState({ newComment: { text: event.target.value } });
  };

  handleNewComment = (event) => {
    event.preventDefault();

    let newComment = {
      id: this.state.comments.length + 1,
      text: this.state.newComment.text,
    };

    this.setState((state) => {
      if (this.state.newComment.title !== "") {
        return {
          comments: [...state.comments, newComment],
        };
      }
    });

    this.setState({
      newComment: [{ id: "", text: "" }],
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <p>
          Welcome, friend. This is where anonymity meets compassion. Pour your
          heart out in this safe space. No judgements. Scream into the void.
        </p>
        <h1>
          {
            this.state.titles[
              Math.floor(Math.random() * this.state.titles.length)
            ]
          }
        </h1>
        <div className="post">
          <input
            type="text"
            onChange={() => this.createNewComment}
            value={this.newComment}
          />
          <button onClick={this.handleNewComment} type="submit">
            RELEASE
          </button>
        </div>
        <section>
          <div className="submissions">
            {this.state.comments.map((comment) => {
              return (
                <p className="sub-text" key={comment.id}>
                  {comment.text}
                </p>
              );
            })}
          </div>
        </section>
      </div>
    );
  }
}

export default App;
