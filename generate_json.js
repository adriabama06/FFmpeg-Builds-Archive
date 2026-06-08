import { readdirSync, writeFileSync } from "fs";
import { extname, join } from "path";

const BASE_URL = "https://github.com/adriabama06/FFmpeg-Builds-Archive/raw/refs/heads/main/";

const get_os = (fname) => {
    if(fname.includes("linux")) return "linux";
    if(fname.includes("win")) return "windows";
    throw "Unknown os for " + fname;
}

const get_arch = (fname) => {
    if(fname.includes("arm64")) return "arm64";
    if(fname.includes("64")) return "x64";
    throw "Unknown arch for " + fname;
}

let result = {};

const versions = readdirSync(".").filter(f => (/\d\./g).test(f)).reverse();

for (const version of versions) {
    if(!result[version]) result[version] = {};

    const files = readdirSync(join(".", version)).filter(f => [".tar", ".xz", ".zip", ".rar", ".gz"].includes(extname(f)));

    for (const file of files) {
        if(!result[version][get_os(file)]) result[version][get_os(file)] = {};

        result[version][get_os(file)][get_arch(file)] = BASE_URL + `${version}/${file}`;
    }
}

writeFileSync("ffmpeg-list.json", JSON.stringify({ versions: result }));
writeFileSync("ffmpeg-list-humanized.json", JSON.stringify({ versions: result }, undefined, 4));
