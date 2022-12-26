import { useState } from 'react'

const NUMBER_OF_LETTERS = 5;

const useWoordle = () => {
    const [currentGuess, setCurrentGuess] = useState([]);

    const addGuess = (guess) => {
        if (currentGuess.length < NUMBER_OF_LETTERS) {
            setCurrentGuess((currentGuess) => [...currentGuess, guess]);
            return;
        }

        if (currentGuess.length === NUMBER_OF_LETTERS) {
            setCurrentGuess((currentGuess) => {
                const currentGuessCopy = currentGuess;
                currentGuessCopy[NUMBER_OF_LETTERS - 1] = guess;
                return [...currentGuessCopy];
            });
            return;
        }
    };

    const removeLastGuess = () => {
        console.log("clean");
    };

    return {
        currentGuess,
        addGuess,
        removeLastGuess,
    };
};


export default useWoordle;