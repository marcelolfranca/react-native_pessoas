//Deixa a primeira letra de uma String maiúscula
const caixaAlta = string => {
    return string[0].toUpperCase() + string.slice(1);
}

export default caixaAlta;