class LinearHistory {
    constructor(initPosition) {
        this.history = [initPosition];
        this.index = 0;
    }

    /**
     * Adds a new visit to the history.
     *
     * @param {any} address - The new address to add to the history.
     * @return {void}
     */
    addNew(address) {
        this.history.push(address);
        this.__cleanDuplicates();
        this.index = this.history.length - 1;
    }

    /**
     * Goes back once in the history and returns that point.
     *
     * @return {type} Point in history
     */
    goBack() {
        if (this.index <= 0) return this.index;
        this.index--;
        return this.history[this.index];
    }

    /**
     * Goes forward once in the history and returns that point.
     *
     * @return {type} Point in history
     */
    goForward() {
        if (this.index >= this.history.length - 1) return this.index;
        this.index++;
        return this.history[this.index];
    }

    /**
     * Goes to the specific index in history and returns that point.
     *
     * @return {type} Point in history
     */
    goToIndex(index) {
        this.index = index;
        return this.history[this.index];
    }

    /**
     * Return the current point in history.
     *
     * @return {type} Point in history
     */
    getCurrentPoint() {
        return this.history[this.index];
    }

    /**
     * Return the possible next index in history.
     *
     * @return {type} Point in history
     */
    getNextIndex() {
        if (this.index >= this.history.length - 1) return this.index;
        return this.index + 1;
    }

    /**
     * Return the possible previous index in history.
     *
     * @return {type} Point in history
     */
    getPreviousIndex() {
        if (this.index <= 0) return this.index;
        return this.index - 1;
    }

    /**
     * Return the current index in history.
     *
     * @return {type} Point in history
     */
    getCurrentIndex() {
        return this.index;
    }

    /**
     * Clears the whole history.
     *
     * @return {type} Point in history
     */
    clear() {
        this.history = [];
        this.index = 0;
    }

    __cleanDuplicates() {
        this.history = [...new Set(this.history)];
    }
}

export { LinearHistory };
