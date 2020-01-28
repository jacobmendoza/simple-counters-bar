import CounterDefinition from "../src/counter_definition";

const sampleCounter : CounterDefinition = {
    name: "Sample counter",
    unit: "km/h",
    implementation: async () => {
        return 2;
    }
};

export default sampleCounter;