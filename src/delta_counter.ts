import CounterDefinition from "../src/counter_definition";
import DefaultCounter from "./default_counter";

export class DeltaCounter extends DefaultCounter {
    lastResult = null;

    constructor(definition : CounterDefinition) {
        super(definition);
    }

    async retrieveCounter() {
        const baseResult = await super.retrieveCounter();

        const result = {
            ...baseResult,
            ...{ delta: (this.lastResult) ? baseResult.value - this.lastResult  : 0 }
        };

        this.lastResult = baseResult.value;

        return result;
    }
}