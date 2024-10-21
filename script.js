const queue = [`1 - Maria
    2- João
    3- Ana`]


let menu =prompt(`Opções;
       1-Novo paciente
       2-Consultar paciente
       3-Sair`)
switch(menu){
case 1:
let newPacient = prompt('Digite o nome do novo paciente:')
queue.push(newPacient)
case 2:
let removePacient = prompt('Digite o nome do pacinete que deseja remover:')
queue.pop(remove)
}