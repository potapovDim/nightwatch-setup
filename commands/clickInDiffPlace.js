export function command(selector,x,y) {
    this
        .moveToElement(selector,x,y)
        .mouseButtonDown('right')
        .click(selector)
    return this;
}
