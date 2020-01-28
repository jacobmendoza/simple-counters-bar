import 'mocha';
import CounterDefinition from "../src/counter_definition";
import {DeltaCounter} from "../src/delta_counter";
import { expect } from 'chai';

describe('Delta Counter',
    () => {
        it('returns 0 the first time', async () => {
            let timesCalled = 0;

            const definition : CounterDefinition = {
                name: 'test',
                unit: 'x',
                implementation: () => {
                    timesCalled++;
                    return timesCalled;
                }};

            const counter = new DeltaCounter(definition);

            const result = await counter.retrieveCounter();

            expect(result.name).to.equal('test');
            expect(result.unit).to.equal('x');
            expect(result.value).to.equal(1);
            expect(result.delta).to.equal(0);
        });

        it('returns delta the second time', async () => {
            let timesCalled = 0;

            const definition : CounterDefinition = {
                name: 'test',
                unit: 'x',
                implementation: () => {
                    timesCalled++;
                    return timesCalled;
                }};

            const counter = new DeltaCounter(definition);

            await counter.retrieveCounter();

            const result = await counter.retrieveCounter();

            expect(result.name).to.equal('test');
            expect(result.unit).to.equal('x');
            expect(result.value).to.equal(2);
            expect(result.delta).to.equal(1);
        });
    });