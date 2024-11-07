#!/usr/bin/env node
import { buildMergedDoc, buildStandaloneDocs } from "notion-easy-export";
import { hideBin } from "yargs/helpers";
import yargs from "yargs";

const argv = yargs(hideBin(process.argv))
    .usage("Usage: $0 <pageId>")
    .env("NEEC")
    .option("token", {
        alias: "t",
        describe: "Notion token_v2",
        type: "string",
    })
    .option("pageId", {
        alias: "p",
        describe: "Notion page id",
        type: "string",
    })
    .command("single", "Single mode. It allows users to generate a separate PDF for each of the HTML pages.")
    .command("merge", "It allows users to generate a single PDF for the entire export. It concatenates each of the notion pages smartly to generate a single document.")
    .strict()
    .demandOption("token", "Please provide a valid token_v2. It can be found in your browser cookies after logging in.")
    .demandOption("pageId", "Please provide a valid page id. Its the part after last '-' in the page URL. ie '.../cool-note-1234567890abcdef'")
    .demandCommand(1, 1, "You need to provide a command.")
    .parse();

const token_v2 = argv.token;
const pageId = argv.pageId;
const command = argv._[0];

if (command === "single") {
    console.log("Building standalone docs...");
    buildStandaloneDocs(token_v2, pageId);
} else if (command === "merge") {
    console.log("Building merged doc...");
    buildMergedDoc(token_v2, pageId);
} else {
    console.error("Invalid command. Please provide either 'single' or 'merge'");
}
