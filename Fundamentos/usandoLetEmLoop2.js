var funcs = []

for(let i = 0; i <= 10; i++){// Let não possui escopo de bloco
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()//Let possui escopo de função
funcs[8]()