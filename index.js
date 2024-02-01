const boletins = [
    {
      aluno: "João",
      notas: [8, 7, 9]
    },
    {
      aluno: "Maria",
      notas: [6, 8, 7]
    },
    {
      aluno: "Pedro",
      notas: [9, 9, 10]
    }
  ];
const BoletinsContainer =document.getElementById("boletins");
const btnCarregar = document.getElementById("btnCarregar");
btnCarregar.addEventListener("click", function() {
    mostrarBoletins();
});
function mostrarBoletins() {
    boletinsContainer.innerHTML = "";
    boletins.forEach(function(boletim) {
      const boletimDiv = document.createElement("div");
      boletimDiv.classList.add("boletim");

      const alunoHeading = document.createElement("h2");
      alunoHeading.textContent = boletim.aluno;
      boletimDiv.appendChild(alunoHeading);

      const notasList = document.createElement("ul");
      notasList.classList.add("notas");
      boletim.notas.forEach(function(nota) {
        const notaItem = document.createElement("li");
        notaItem.textContent = `Nota: ${nota}`;
        notasList.appendChild(notaItem);
      });
      boletimDiv.appendChild(notasList);

      boletinsContainer.appendChild(boletimDiv);
    });
}
