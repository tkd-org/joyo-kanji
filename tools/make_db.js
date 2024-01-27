// source.tsvを読み込み

const fs = require('fs');
const path = require('path');
const readline = require('readline');
fs.readFile(path.join(__dirname, 'source.tsv'), 'utf8', (err, data) => {
    if (err) throw err;
    // console.log(data);
    const lines = data.split('\n');
    // console.log(lines);
    const char_map = {};
    lines.forEach(line => {
        if (line === '') return;
        const [no, char, main, stroke_count, when_learn,updated, pronounce] = line.split('\t');
        // strokes[kanji] = parseInt(count, 10);
        char_map[char] = {
            main,
            stroke_count,
            when_learn,
            updated,
            pronounce,
            no,
        }
    });

    console.log(char_map);
    // console.log(strokes);
    fs.writeFile(path.join(__dirname, '../db/chars.json'), JSON.stringify(char_map), err => {
        if (err) throw err;
        console.log('done');
    })

    // make stroke_kanji.json
    const stroke_kanji = {};
    Object.keys(char_map).forEach(char => {
        const stroke_count = char_map[char].stroke_count;
        if (!stroke_kanji[stroke_count]) {
            stroke_kanji[stroke_count] = [];
        }
        stroke_kanji[stroke_count].push(char);
    });
    console.log(stroke_kanji);
    fs.writeFile(path.join(__dirname, '../db/stroke_kanji.json'), JSON.stringify(stroke_kanji), err => {
        if (err) throw err;
        console.log('done');
    })
}
);
