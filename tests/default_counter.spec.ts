import { expect } from 'chai';
import 'mocha';
import DefaultCounter from "../src/default_counter";
import CounterDefinition from "../src/counter_definition";

describe('Default Counter',
    () => {
        it('returns the properties and executes the sync function', async () => {
            const definition : CounterDefinition = {name: 'test', unit: 'x', implementation: () => 123};

            const counter = new DefaultCounter(definition);

            const result = await counter.retrieveCounter();

            expect(result.name).to.equal('test');
            expect(result.unit).to.equal('x');
            expect(result.value).to.equal(123);
        });

        it('returns the properties and executes an async function', async () => {
            const definition : CounterDefinition = {name: 'test', unit: 'x', implementation: () => {
                return new Promise((resolve, _) => {
                    setTimeout(() => { resolve(456); }, 5);
                });
                }};

            const counter = new DefaultCounter(definition);

            const result = await counter.retrieveCounter();

            expect(result.name).to.equal('test');
            expect(result.unit).to.equal('x');
            expect(result.value).to.equal(456);
        });
    });