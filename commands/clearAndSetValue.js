export function command(selector, value) {
    this
        .pause(250)
        .clearValue(selector)
        .pause(250)
        .setValue(selector, value)
        .pause(250);
    return this;
}
