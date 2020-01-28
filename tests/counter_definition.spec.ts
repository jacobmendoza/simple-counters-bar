import SampleCounterDefinition from '../user_counters/sample_counter_definition';
import { expect } from 'chai';
import 'mocha';

describe('Sample counter',
    () => {
        it('should have the proper properties', async () => {
            expect(SampleCounterDefinition.name).to.equal("Sample counter");
            expect(SampleCounterDefinition.implementation).to.be.a('function');

            const result = await SampleCounterDefinition.implementation();
            expect(result).to.equal(2);
        });
    });