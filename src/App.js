import React, { Component } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Definitions from "./components/Definitions";
import Phonetics from "./components/Phonetics";
import Footer from "./components/Footer";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      phonetics: [
        {
            text: "/həˈloʊ/",
            audio: "https://lex-audio.useremarkable.com/mp3/hello_us_1_rr.mp3"
        },
        {
            text: "/hɛˈloʊ/",
            audio: "https://lex-audio.useremarkable.com/mp3/hello_us_2_rr.mp3"
        }
      ],
      meanings: [
        {
          partOfSpeech: "exclamation",
          definitions: [
              {
                  definition: "Used as a greeting or to begin a phone conversation.",
              }
          ]
        },
        {
          partOfSpeech: "noun",
          definitions: [
            {
              definition: "An utterance of “hello”; a greeting.",
              synonyms:[
                  "greeting",
                  "welcome",
                  "salutation",
                  "saluting",
                  "hailing",
                  "address",
                  "hello",
                  "hallo",
              ]
            }
          ]
        },
        {
          partOfSpeech: "intransitive verb",
          definitions: [
            {
              definition: "Say or shout “hello”; greet someone.",
            }
          ]
        }
      ]
    }
  }

  updateUI = (data) => {
    this.setState({...data});
  }

  render() {
    return (
      <>
        <Header />
        <Search updateUI={this.updateUI} />
        <Phonetics phonetics={this.state.phonetics} /> 
        <Definitions meanings={this.state.meanings}/>
        <Footer />
      </>
    );
  }
}

export default App;
