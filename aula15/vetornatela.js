let valores = [8, 1, 7, 4, 2, 9]

for(let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

// ou uma maneira mais simples de fazer o mesmo resultado
console.log('\nOutra maneira de fazer o mesmo resultado:\b')

for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}