function example() {
    let out = ""

    // Map use - no initialization
    const colors = new Map();
    colors.set('Metallic', 'gold');
    colors.set('pastel', 'pink');

    out += `<h1>Map: ${colors.get('Metallic')}</h1>`;
    
    document.getElementById("root").innerHTML = out;
}

window.addEventListener("load", example);