class Equation {

    constructor() {
        this.setLeftValue(0);
        this.setOperationComputation(() => 0);
    };

    solve(rightValue) {
        return this.operationComputation(this.leftValue, rightValue)
    };

    setOperationComputation = (operationComputationCallback) => {
        this.operationComputation = operationComputationCallback;
    };

    setLeftValue(leftValue) {
        this.leftValue = leftValue;
    }

};

export default Equation;
