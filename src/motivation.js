import './a-propos.css';

const textElements = document.querySelectorAll(".title, .title1, .title2, .title3");

textElements.forEach(function(element) {
    // Get text from the element
    const textString = element.innerText;

    // Create a Blotter Text object for the text
    const text = new Blotter.Text(textString, {
        family: "'Sigmar One', serif",
        size: calculateFontSize(window.innerWidth),
        fill: 'rgb(7, 98, 116)',
        paddingLeft: 20,
        paddingRight: 20
    });
    element.textContent = ""; // On vide la balise span

    // Create a Blotter material for the text
    const material = new Blotter.LiquidDistortMaterial();
    material.uniforms.uSpeed.value = 0.3;
    material.uniforms.uVolatility.value = 0.1;
    material.uniforms.uSeed.value = 0.1;

    // Apply the material to the text
    const blotter = new Blotter(material, { texts: text });
    const scope = blotter.forText(text);
    scope.appendTo(element);

    // Listen for screen size changes and adjust font size accordingly
    window.addEventListener('resize', function() {
        text.parameters.size = calculateFontSize(window.innerWidth);
        scope.redraw();
    });
});
// Calculates the font size based on the screen width
function calculateFontSize(width) {
    if (width < 750) {
        return Math.round((width / 600) * 30);
    } else {
        return Math.round((width / 1400) * 50);
    }
}