function addWords(obj, wrds) {
    wrds = wrds.replace(/ +/g, ' ').trim();
    let wrds_arr = wrds.split(' ');
    obj.words = obj.words.replace(/ +/g, ' ').trim();
    let obj_arr = obj.words.split(' ');
    for (i = 0; i < wrds_arr.length; i++) {
        obj_arr.push(wrds_arr[i]);
    }
    var last_arr = [];
    for (var i = 0; i < obj_arr.length; i++) {
        if (last_arr.indexOf(obj_arr[i]) === -1) {
            last_arr.push(obj_arr[i]);
        }
    }
    obj.words = last_arr.join(" ");
}

function removeWords(obj, wrds) {
    wrds = wrds.replace(/ +/g, ' ').trim();
    let wrds_arr = wrds.split(' ');
    obj.words = obj.words.replace(/ +/g, ' ').trim();
    for (i = 0; i < wrds_arr.length; i++) {
        obj.words = obj.words.replace(wrds_arr[i], '');
    }
    obj.words = obj.words.replace(/ +/g, ' ').trim();
}

function changeWords(obj, oldWrds, newWrds) {
    removeWords(obj, oldWrds);
    addWords(obj, newWrds);
    obj.words = obj.words.replace(/ +/g, ' ').trim();
}