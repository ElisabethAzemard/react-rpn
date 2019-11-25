import React, { Component } from 'react';

class Calculator extends Component {

    constructor(props) {

        super(props);

        this.state = {
            data: [],
            stack: []
        }
    }

    handleClick = (event) => {

        let number = event.target.value;

        if (number === '10') {
            number = '.';
        }

        // add the number clicked to the data table
        this.setState((prevState) => ({
            data: [...prevState.data, number]
        }));

    }

    handleSubmit = (event) => {

        // prevent page reload
        event.preventDefault();

        // if data is empty, return
        if (this.state.data.length < 1)
            return;

        // get digits from data,
        // join them into a single string
        // and turn them into a number
        let stack = this.state.data.join('');

        stack = Number(stack);

        // empty data
        this.setState((prevState) => ({
            data: []
        }));

        // add the obtained number to the stack
        this.setState((prevState) => ({
            stack: [...prevState.stack, stack]
        }));

    }



    render() {

        return (
            <div>
                <div id="screen">
                    <ul id="stack">
                        { this.state.stack.map(function (stackElement, index) {
                            return <li key={index}>{stackElement}</li>;
                        })}
                    </ul>

                    <span id="current-number">

                    </span>
                </div>

                <ul id="input-buttons">
                    <li value="7" onClick={this.handleClick}> 7 </li>
                    <li value="8" onClick={this.handleClick}> 8 </li>
                    <li value="9" onClick={this.handleClick}> 9 </li>
                    <li value="4" onClick={this.handleClick}> 4 </li>
                    <li value="5" onClick={this.handleClick}> 5 </li>
                    <li value="6" onClick={this.handleClick}> 6 </li>
                    <li value="1" onClick={this.handleClick}> 1 </li>
                    <li value="2" onClick={this.handleClick}> 2 </li>
                    <li value="3" onClick={this.handleClick}> 3 </li>
                    <li value="10" onClick={this.handleClick}> . </li>
                    <li value="0" onClick={this.handleClick}> 0 </li>

                    <li value="11"> ± </li>
                </ul>

                <ul id="operator-buttons">
                    <li value="add"> + </li>
                    <li value="rem"> - </li>
                    <li value="mult"> * </li>
                    <li value="div"> ÷ </li>
                </ul>

                <ul id="action-buttons">
                    <li id="swap"> SWAP </li>
                    <li id="clear"> CLEAR </li>
                    <li id="clear"> DROP </li>
                    <li id="enter" onClick={this.handleSubmit}> &#8617; </li>
                </ul>

            </div>
        )
    }

}

export default Calculator;
