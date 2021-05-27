import React, { Component } from 'react';

class MainComponent extends Component {
    render() {

        var nameList = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua']
        var result = [];

        function ProcessWordList() {
            var tempListResult = []
            for (let i = 0; i < nameList.length; i++) {
                for (let j = 0; j < nameList.length; j++) {
                    if (nameList[i].length === nameList[j].length) {
                        if (isAnagram(nameList[i], nameList[j])) {
                            tempListResult.push(nameList[j]);
                        }
                    }
                }
                if (tempListResult.length !== 0) {
                    result.push(tempListResult);
                }
                tempListResult = [];
            }
            deleteDuplicate();
            return (
                <div>
                    <p style={{marginBottom: -20}}>[</p>
                    <div style={{ paddingLeft: 10 }}>
                        <div style={{ whiteSpace: "pre-line" }}>{print()}</div>
                    </div>
                    <p style={{marginTop: 0}}>[</p>
                </div>
            )
        }

        function print() {
            let temp = '';
            for (let i = 0; i < result.length; i++) {
                temp = '' ? temp = JSON.stringify(result[i]) :
                    temp = temp + "\n" + JSON.stringify(result[i])
            }
            console.log(temp)
            return temp
        }

        function isAnagram(word1, word2) {
            var tempCountSizetrue = 0;
            for (let i = 0; i < word1.length; i++) {
                var lengthListWord = 0;
                for (let j = 0; j <= word2.length; j++) {
                    var letter1 = word1.substring(i, i + 1);
                    var letter2 = word2.substring(j, j + 1);
                    if (letter1 === letter2) {
                        lengthListWord = lengthListWord + 1;
                    }
                }
                if (lengthListWord !== 0) {
                    tempCountSizetrue = tempCountSizetrue + 1;
                }
            }
            if (word1.length === tempCountSizetrue) {
                return true;
            } else {
                return false;
            }
        }

        function deleteDuplicate() {
            for (let i = 0; i < result.length; i++) {
                for (let j = 0; j < result.length; j++) {
                    var word1 = JSON.stringify(result[i]);
                    var word2 = JSON.stringify(result[j])
                    if (i !== j) {
                        if (word1 === word2) {
                            result.splice(j, 1)
                        }
                    }
                }
            }
        }

        return (
            <div>
                {ProcessWordList()}
            </div>
        )
    }
}

export default MainComponent;