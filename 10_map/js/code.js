function example() {
    let out = ""

    // Map use - no initialization
    const colors = new Map();
    colors.set('Metallic', 'gold');
    colors.set('pastel', 'pink');

    out += `<h1>Map: ${colors.get('Metallic')}</h1>`;
    out += `<h1>Size: ${colors.size}</h1>`;

    // Iteration
    for (item of colors) {
        out += `<h1>Items: ${item}</h1>`;
    }

    for (item of colors.keys()) {
        out += `<h1>Keys: ${item}</h1>`;
    }

    colors.forEach((value, key) => {
        out += `<h1>Values: ${value} - ${key}</h1>`;
    });

    const colorsIterators = colors.values();
    out += `<h1>Iterator: ${colorsIterators.next().value}</h1>`;

    document.getElementById("root").innerHTML = out;
}

window.addEventListener("load", example);
