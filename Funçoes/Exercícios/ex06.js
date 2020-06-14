function jurosSimples(capital, taxa, tempo) {
    console.log(`${capital * taxa * tempo}`)
}

function jurosCompostos(capital, taxa, tempo) {
    let montante = capital
    let c = 1
    while (c <= tempo) {
        c++
        montante = (montante * (1 + taxa))
    }
    console.log(montante)
}

jurosSimples(160, 0.6, 3)
jurosCompostos(5000, 0.05, 5)