let comparaComThis  = function(param) {
    console.log(this === param)
}

let comparaComThisArrow = (param) => console.log(this === param)

comparaComThis(global)
comparaComThisArrow(global)