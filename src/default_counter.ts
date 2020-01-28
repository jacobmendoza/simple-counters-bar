import CounterDefinition from "./counter_definition";

export default class DefaultCounter {
    counterDefinition = null;

    constructor(definition : CounterDefinition) {
        this.counterDefinition = definition;
    }

    async retrieveCounter() {
        return {
            ...this.counterDefinition,
            ...{ value: await this.counterDefinition.implementation() }
        };
    }
}