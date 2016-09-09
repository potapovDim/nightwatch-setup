export function command(selector, selector2) {
    this
        .moveToElement(selector, '0', '0')
        .mouseButtonDown('left')
        .pause(500)
        .moveToElement(selector2, '0', '0')
        .pause(500)
        .mouseButtonUp('left');

    return this;
}
