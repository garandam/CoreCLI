#!/usr/bin/env node

import commander = require("commander");

const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");

class CoreCLI {
  private banner = "CoreCLI";
  private bannerFont = "Slant";

  constructor() {
    this.initCliBanner();
    this.initCommander();
  }

  private initCliBanner() {
    clear();
    console.log(
      chalk.green(
        figlet.textSync(this.banner, {
          font: this.bannerFont
        })
      )
    );
  }

  private initCommander() {
    commander.version("0.0.0");

    if (!process.argv.slice(2).length) {
      commander.outputHelp();
      process.exit();
    }
    commander.parse(process.argv);
  }
}

export default new CoreCLI();
