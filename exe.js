const fs = require("fs");
const Befunge = require("befunge93");

const programme = fs.readFileSync(process.argv[2], "utf8");
const entrees = process.argv.slice(3);
let index = 0;

async function main() {
    const interpreteur = new Befunge();

    interpreteur.onInput = () => {
        if (index >= entrees.length) {
            throw new Error("Pas assez de valeurs en entrée.");
        }

        return entrees[index++];
    };

    const sortie = await interpreteur.run(programme);

    if (sortie !== undefined) {
        process.stdout.write(String(sortie));
    }
}

main().catch(erreur => {
    console.error(erreur.message);
    process.exitCode = 1;
});