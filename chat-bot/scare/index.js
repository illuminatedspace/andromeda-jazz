let scareCount = 0;

const add = "add";
const minus = "minus";

const makeScareMessage = timesScared => {
    const noun = timesScared === 1 ? "time" : "times";
    return `Liz has been scared ${timesScared} ${noun} this stream.`
}

const handleScareCommand = ([modify, amount], say, context) => {
    let message = "";

    console.log(modify, amount)

    if (!modify && !amount) {
        message = makeScareMessage(scareCount);
    } else if (modify === add) {
        scareCount += Number(amount);
        message = makeScareMessage(scareCount);
    } else if (modify === minus) {
        scareCount -= Number(amount);
        message = makeScareMessage(scareCount);
    } else {
        message = `I don't recognize that command. You can say "scare [add/minus] [number]" to modify the count or "scare" to get the count.`
    }

    say(message);
}

export default handleScareCommand;
