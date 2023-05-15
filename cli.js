#!/usr/bin/env node
// *--the firts line is importan for the correct operation to the app, don't delete it ---*//

// libreria nativa para leer argumentos de la terminal
import { argv } from 'process'
// importo la api de mdLinks
import { mdLinks } from './index.js';
import chalk from 'chalk';
import { calculateStats } from './calculateStats.js';



const CLI = () => {

    // md-linkconsole.log(validate, stats)


    console.log(chalk.bold.magentaBright(" ------Welcome to MD-LINKS!!! ------\n"));
    console.log(chalk.bold.magentaBright(" ------By Gloria Villagrán 2023 -----\n"));
    console.log(chalk.bold.magentaBright(" \n"));



    const path = argv[2];
    const validate = argv.includes('--validate');
    const stats = argv.includes('--stats');
    const help = argv.includes('--help');

    if (argv[2] === undefined) {
        console.log(
            chalk.hex('#0000ff').bold(`Please, enter a path or enter ${chalk.hex('#cb2821').bold('"--help"')}.`)
        )
    } else if (help) {
        console.log(help)
        {
            // Print the help message and return if the `--help` flag is present
            console.log(chalk('Usage: md-link <path-to-file> [options]'));
            console.log(chalk.whiteBright('\nOptions:'));
            console.log(chalk.green('\t--validate          Shows the route, link text, also with its status and message (ok or fail)'));
            console.log(chalk.green('\t--stats             Show the text with basic statistics about the links.'));
            console.log(chalk.green('\t--validate --stats  You get the statistics you need from the validation results (total, unique and broken links).'));
            console.log('\n');
            return;
        }
    } else if (!validate && !stats) {
        console.log(chalk.bold.cyan(" ----------------------------------\n"));
        console.log(chalk.bold.cyan(" ------Getting links!! -----\n"));
        console.log(chalk.bold.cyan(" ----------------------------------\n"));



    mdLinks(path, { validate: false })
        .then((links) => {
            links.forEach((infoLink, i) => { // i es el numero de link que se va sumando
    console.log(`${chalk.yellowBright.bold('Link ' + (i + 1))}\n 
    - Link: ${chalk.blue.bold(infoLink.href)}\n
    - Text: ${chalk.blue.bold(infoLink.text.slice(0, 49))}\n
    - File: ${chalk.blue.bold(infoLink.file)}\n
    ----------------------------------\n
            `);
                });
            })
            .catch((e) => {
                console.log(`Error:${chalk.yellowBright(e)}`);
            });
    }

    /**---Mostrar stats y validate--- */
    if (validate && stats) {
        console.log(chalk.bold.cyan(" ---------------------------------------\n"));
        console.log(chalk.bold.cyan(" --- Validate and stats links!!---\n"));
        console.log(chalk.bold.cyan(" ---------------------------------------\n"));
        mdLinks(path, { validate: true, stats: true })
            .then((stats) => {
               
                console.log(chalk.yellowBright(`Total Links: ${stats.total}`));
                console.log(chalk.underline.green(`Unique: ${stats.unique}`));
                console.log(chalk.red(`Broken: ${stats.broken}\n`));
            })
            .catch((e) => {
                console.log(`Error:${chalk.yellowBright(e)}`);
            });
    }
    /**---Mostrar solo validate ---*/
    if (validate && !stats) {
        console.log(chalk.bold.cyan(" ----------------------------------\n"));
        console.log(chalk.bold.cyan(" -----Validating links!!-----\n"));
        console.log(chalk.bold.cyan(" ----------------------------------\n"));
        mdLinks(path, { validate: true })

            .then((validLinks) => {
                validLinks.forEach((infoLink, i) => {
                    console.log(`------${chalk.yellowBright.bold('Link ' + (i + 1))}------`)
                    console.log(chalk.blue(`href: ${infoLink.href}`));
                    console.log(chalk.cyan(`Text: ${infoLink.text.slice(0, 49)}`));
                    console.log(chalk.cyan(`File: ${infoLink.file}`));
                    if (infoLink.status == 200 && infoLink.message == 'Ok') {
                        console.log(chalk.green(`message: ${infoLink.message}`));
                        console.log(chalk.green(`status: ${infoLink.status}\n`));
                    }
                    else {
                        console.log(chalk.red(`message: ${infoLink.message}`));
                        console.log(chalk.red(`status: ${infoLink.status}\n`));
                    }
                })
            })
            .catch((e) => {
                console.log(`Error:${chalk.yellowBright(e)}`);
            });
    }

    /**---Mostrar solo stats--- */
    if (!validate && stats) {
        mdLinks(path, { validate: false, stats: true })
            .then((stats) => {
                console.log(chalk.bold.cyan(" -----------------------\n"));
                console.log(chalk.bold.cyan(" ----- Stats links -----\n"));
                console.log(chalk.bold.cyan(" -----------------------\n"));
                console.log(chalk.yellowBright(`Total Links: ${stats.total}`));
                console.log(chalk.underline.blue(`Unique Links: ${stats.unique}\n`));
            })
            .catch((e) => {
                console.log(`Error:${chalk.yellowBright(e)}`);
            });
    }

}

CLI();


