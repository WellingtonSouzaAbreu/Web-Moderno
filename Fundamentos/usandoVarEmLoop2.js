var funcs = []

for(var i = 0; i <= 10; i++){// Var não possui escopo de bloco
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()//Var não possui escopo de função
funcs[8]()