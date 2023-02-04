let scriptInicial = 'TTRCOD = 500 TTRDESC = Saldo Conta Corrente';
let novoScript = scriptInicial.split(' ');
let condicao = '';
let inicio = 'UPDATE SET TABLE ';
let where = 'WHERE ';
let descricao = '';
let descricaoFrase = '';
let script = '';
let scriptCompleto = '';

for (let i = 0; i < 3; i++) {
  condicao += novoScript[i] + ' ';
}

for (let i = 3; i < 5; i++) {
  descricao += novoScript[i] + ' ';
}

for (let i = 5; i < novoScript.length; i++) {
  descricaoFrase += novoScript[i] + ' ';
}

script = inicio + descricao + " '" + descricaoFrase + "' " + where + condicao+';';
let ajuste1 = script.replace(" ' ", "' ");
let ajuste2 = ajuste1.replace(" ;", ";")

scriptCompleto = ajuste2;
console.log(scriptCompleto)