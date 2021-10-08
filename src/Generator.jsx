import React from 'react';

const Generator = () => {

    const baseUrl = "https://prnt.sc/";

    const getRandomString = (length) => {
        let randomChars = 'abcdefghijklmnopqrstuvwxyz';
        let result = "";
        for ( let i = 0; i < length; i++ ) {
            result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
        }
        return result;
    }

    const getRandomDigits = (length) => {
        return Math.floor(1000 + Math.random() * 9000);
    }

    const goToScreenShot = () => {
        window.open(baseUrl + getRandomString(2) + getRandomDigits(4));
    }

    return (
      <span className="Main-button" onClick={goToScreenShot}>
        Get a Random Screenshot
      </span>
    );
}

export default Generator;
