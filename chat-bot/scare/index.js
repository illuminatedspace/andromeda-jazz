const scareCount = 0;

const add = "add";
const minus = "minus";

const makeScareMessage = timesScared => `Liz has been scared ${timesScared} times this stream.`

const handleScareCommand = ([modify, amount], say, context) => {
    let message = "";

    if (!modify && !add) {
        message = makeScareMessage(timesScared);
    } else if (!modify || !add) {
        message = `I don't recognize that command. You can say "scare [add/minus] [number]" to modify the count or "scare" to get the count.`
    } else if (modify === add) {
        scareCount++;
        message = makeScareMessage(scareCount);
    } else if (modify === minus) {
        scareCount--;
        message = makeScareMessage(scareCount);
    }

    say(message);
}

export default handleScareCommand;
