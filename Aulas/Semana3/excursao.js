let nome = " ";
let idade = 15;
let valorBase = 10;

if (idade <= 5) {
    console.log(nome + " não pagará a excursão.")
}
else if (idade < 12) {
    console.log(nome + " pagará R$ " + valorBase + " na excursão.")
}
else if (idade < 18) {
    let valorExc = valorBase + (idade / 2);
    console.log(nome + " pagará R$ " + valorExc + " na excursão.")
}
else {
    let valorExc = valorBase + idade;
    console.log(nome + " pagará R$ " + valorExc + " na excursão.")
}