const fs = require("fs");
const Befunge = require("befunge93");

const programme = fs.readFileSync(process.argv[2], "utf8");
const tests = fs.readdirSync("tests").filter(f => f.endsWith(".in"));

async function main() {
    let total = 0;
    let reussis = 0;

    for (const test of tests) {
        const lignes = fs.readFileSync("tests/" + test, "utf8")
            .trim().split("\n");

        const attendus = fs.readFileSync(
            "tests/" + test.replace(".in", ".out"), "utf8"
        ).trim().split("\n");

        for (let i = 0; i < lignes.length; i++) {
            total++;

            const interpreteur = new Befunge();
            const valeurs = lignes[i].trim().split(/\s+/);
            let index = 0;

            interpreteur.onInput = () => valeurs[index++];

            const obtenu = String(await interpreteur.run(programme)).trim();

            if (obtenu === attendus[i]) {
                console.log("OK :", test, "ligne", i + 1);
                reussis++;
            } else {
                console.log("ÉCHEC :", test, "ligne", i + 1,
                    "| attendu :", attendus[i], "| obtenu :", obtenu);
            }
        }
    }

    console.log(`${reussis}/${total} tests réussis`);
    if (reussis !== total) process.exitCode = 1;
}

main();