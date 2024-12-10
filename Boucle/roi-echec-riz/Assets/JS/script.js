let riz =1

for (let i = 0; i < 64; i++) {
    riz = riz*2
}

document.writeln(`<p>Nombre de grains de riz = ${riz}</p>`)
document.writeln(`<p>Nombre de grains de riz = ${Math.pow(2,64)}</p>`)