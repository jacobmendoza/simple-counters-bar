import CounterDefinition from "../src/counter_definition";

const randomCounter : CounterDefinition = {
    name: "Random counter",
    unit: "km/h",
    implementation: async () => {
        return Math.floor((Math.random() * 100) + 1);
    }
}

export default randomCounter;