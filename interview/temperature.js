const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('', N => {
    readline.question('', tempStr => {
      // Convertir la chaîne de températures en tableau d'entiers
    const temperatures = tempStr.split(' ').map(Number);
    let result = 0; // La valeur par défaut si aucune température n'est fournie

    if (N > 0 && temperatures.length > 0) {
        // Trouver la température la plus proche de zéro
        result = temperatures.reduce((prev, curr) => {
            return (Math.abs(curr) < Math.abs(prev) || (Math.abs(curr) === Math.abs(prev) && curr > prev)) ? curr : prev;
        });
    }

    console.log(result);
    readline.close();
    });
});
