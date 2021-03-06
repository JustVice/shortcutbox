const content_dynamic = document.getElementById('content_dynamic');

/**
 * Generates objects IDs.
 * Example of a generated objectID with "S" prefix: S6558e19262. This function can also
 * be found in main process side.
 * @param prefix The prefix will be placed at the beginning of the generated ID.
 */
function generateObjectID(prefix) {
    let prefix_result = "";
    prefix != undefined ?
        prefix_result = prefix :
        prefix_result = 'x';

    const firstNumberBlock = Math.floor(Math.random() * 100000);
    const secondNumberBlock = Math.floor(Math.random() * 100000);
    const vocalSelection_number = Math.floor(Math.random() * 10);

    let vocalSelection_result = "";
    vocalSelection_number <= 5 ?
        vocalSelection_result = 'a' :
        vocalSelection_result = 'e';

    return "" + prefix_result + firstNumberBlock + vocalSelection_result + secondNumberBlock;
}