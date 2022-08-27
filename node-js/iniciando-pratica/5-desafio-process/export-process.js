module.exports = getFlags; 

function getFlags(flag) {
    const index = process.argv.indexOf(flag) + 1;
    return process.argv[index];
}