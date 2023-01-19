import typingPrompts from "./typingPrompts";

class Room {
    /**
     * @param members array of user IDs to be placed into a dictionary
     * @var timer current time that this room was created
     * @var typePrompt string of typing prompt
     * @var gameWon determines whether the game has been won or not
     */
    constructor(members) {
        this.members = members.reduce((acc, cur) => {
            acc[cur] = { currentString: "", actions: 0 };
            return acc;
        }, {});
        this.timer = Date.now();
        this.typePrompt = typingPrompts[Math.floor(Math.random() * typingPrompts.length)];
        this.gameWon = false;
    }

    /**
     * Changes the user's current string
     * @param string Current user input
     * @param id ID of user
     */

    addCharacter(string, id) {
        if (this.members[id]) {
            this.members[id].currentString = string;
        }
    }

    /**
     * Changes the user's total actions
     * @param number Current user's total actions
     * @param id ID of user
     */

    changeActions(number, id) {
        if (this.members[id]) {
            this.members[id].actions = number;
        }
    }

    /**
     * Determines whether the inputted user has just won the game
     * @param id ID of user
     */

    hasUserWon(id) {
        if (this.gameWon) {
            return false;
        }
        if (this.members[id] && this.typePrompt === this.members[id].currentString) {
            this.gameWon = true;
            return true;
        }
        return false;
    }
}

export default Room;
