export function command(element) {
    this
        .moveTo(element,0,0)
        .doubleClick()
    return this;
}