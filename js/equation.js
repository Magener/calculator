class Equation {

    constructor() {
        this.reset();
    };

    reset() {
        this.setLeftValue(0);
        this.setOperationComputation(() => 0);
        this.setLastRightValue(0)
    }

    solve(rightValue) {
        this.setLastRightValue(rightValue)

        return this.operationComputation(this.leftValue, rightValue)
    };

    resolve() {
        return this.solve(this.lastRightValue);
    };

    setOperationComputation = (operationComputationCallback) => {
        this.operationComputation = operationComputationCallback;
    };

    setLeftValue(leftValue) {
        this.leftValue = leftValue;
    }

    setLastRightValue(rightValue) {
        this.lastRightValue = rightValue;
    }

};

export default Equation;
