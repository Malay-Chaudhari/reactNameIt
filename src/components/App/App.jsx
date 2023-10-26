import React, { Component } from "react";
import ResultContainer from "../ResultsContainer/ResultsContainer";
import Header from "./../Header/Header"
import SearchBox from "./../SearchBox/SearchBox"
import "./App.css";

const name = require("@rstacruz/startup-name-generator");

class App extends Component {
    state = {
        headerText: "Name It!",
        headerExpanded: true,
        suggestedNames: [],
    };

    handleInputChange = (inputText) => {
        this.setState({
            headerExpanded: !(inputText),
            suggestedNames: inputText.length > 0 ? name(inputText) : [],
        });
    };

    render() {
        return (
            <div>
                <Header headTitle={this.state.headerText} headerExpanded={this.state.headerExpanded} />
                <SearchBox onInputChange={this.handleInputChange} />
                <ResultContainer suggestedNames={this.state.suggestedNames} />
            </div>
        );
    };
};

export default App;