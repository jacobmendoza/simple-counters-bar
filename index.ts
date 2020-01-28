// @ts-ignore
import { menubar } from 'menubar';
import {DeltaCounter} from "./src/delta_counter";
import * as RegisteredCounters from "./user_counters/";

const PollingTime = 1000;

const menuBarInterfaceBuilder = result => {
    return `${result.name}: ${result.value}`;
};

const computeNewState = async counters => {
    const state = counters
        .map(def => new DeltaCounter(def))
        .map(counter => counter.retrieveCounter());

    return Promise.all(state);
};

const mb = menubar();

mb.on('ready', () => {
    mb.tray.setTitle('Starting...');

    setInterval(async () => {
        const counters = Object.values(RegisteredCounters);

        const newState = await computeNewState(counters);

        const toRender = newState.map(result => menuBarInterfaceBuilder(result));

        mb.tray.setTitle(toRender.join(" / "));
    }, PollingTime);
});