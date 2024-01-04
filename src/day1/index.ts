import fs from 'fs';

/*
* Day 1: Trebuchet?!
*/

try {
    console.log('Hello, Phil!');
    const data = fs.readFileSync('./input.txt', 'utf8');
    const lines = data.split('\n');
    const sums = lines.map((v, i, a) => {
        const f = v.split('').find((v: string) => typeof v === 'number');
        //const l = v.split('').findLast((v: string) => typeof v === 'number');
        //console.log(`${f }${l}`);
        return `${f}`
    }, []);
    console.log(
        sums.reduce((a, cv, ci) => {
            return a + Number.parseInt(cv); // Have to parse cv because it's a string
        })
    )
} catch(e) {

}