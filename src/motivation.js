//titles
const text = new Blotter.Text('Introduction', {
	family: "'Sigmar One', serif",
    size: 50,
	fill: 'rgb(7, 98, 116)',
    paddingLeft: 20,
    paddingRight: 20
});

let material = new Blotter.LiquidDistortMaterial();

material.uniforms.uSpeed.value = 0.3;
material.uniforms.uVolatility.value = 0.1;
material.uniforms.uSeed.value = 0.1;

let blotter = new Blotter(material, {
  texts: text
});

let scope = blotter.forText(text);
let elem = document.querySelector('.title');
scope.appendTo(elem);


const text1 = new Blotter.Text('Objectifs', {
	family: "'Sigmar One', serif",
    size: 50,
	fill: 'rgb(7, 98, 116)',
    paddingLeft: 20,
    paddingRight: 20
});

let material1 = new Blotter.LiquidDistortMaterial();

material1.uniforms.uSpeed.value = 0.3;
material1.uniforms.uVolatility.value = 0.1;
material1.uniforms.uSeed.value = 0.1;

let blotter1 = new Blotter(material1, {
  texts: text1
});

let scope1 = blotter1.forText(text1);
let elem1 = document.querySelector('.title1');
scope1.appendTo(elem1);


const text2 = new Blotter.Text('Inspirations', {
	family: "'Sigmar One', serif",
    size: 50,
	fill: 'rgb(7, 98, 116)',
    paddingLeft: 20,
    paddingRight: 20
});

let material2 = new Blotter.LiquidDistortMaterial();

material2.uniforms.uSpeed.value = 0.3;
material2.uniforms.uVolatility.value = 0.1;
material2.uniforms.uSeed.value = 0.1;

let blotter2 = new Blotter(material2, {
  texts: text2
});

let scope2 = blotter2.forText(text2);
let elem2 = document.querySelector('.title2');
scope2.appendTo(elem2);


const text3 = new Blotter.Text('Conclusion', {
	family: "'Sigmar One', serif",
    size: 50,
	fill: 'rgb(7, 98, 116)',
    paddingLeft: 20,
    paddingRight: 20
});

let material3 = new Blotter.LiquidDistortMaterial();

material3.uniforms.uSpeed.value = 0.3;
material3.uniforms.uVolatility.value = 0.1;
material3.uniforms.uSeed.value = 0.1;

let blotter3 = new Blotter(material3, {
  texts: text3
});

let scope3 = blotter3.forText(text3);
let elem3 = document.querySelector('.title3');
scope3.appendTo(elem3);