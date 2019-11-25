import React, { Component } from 'react';

class Calculator extends Component {

    constructor(props) {

        super(props);

        this.state = {
            data: []
        }
    }

    render() {

        return (
            <div>
                <div id="screen">
                    <ul id="stack">

                    </ul>

                    <span id="current-number">

                    </span>
                </div>

                <ul id="input-buttons">
                    <li value="7"> 7 </li>
                    <li value="8"> 8 </li>
                    <li value="9"> 9 </li>
                    <li value="4"> 4 </li>
                    <li value="5"> 5 </li>
                    <li value="6"> 6 </li>
                    <li value="1"> 1 </li>
                    <li value="2"> 2 </li>
                    <li value="3"> 3 </li>

                    <li value="10"> . </li>
                    <li value="0"> 0 </li>
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
                    <li id="entrer"> &larrhk; </li>
                </ul>

            </div>
        )
    }

}

export default Calculator;
