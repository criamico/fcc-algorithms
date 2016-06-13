/*Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

function spinalCase(str) {
    str = str.replace(/([A-Z])/g, ' $1').replace(/\s+|_/g, '-').replace(/-+/g, '-').toLowerCase();
    if (str[0] === '-')
        return str.slice(1);
    return str;

}
