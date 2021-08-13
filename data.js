const SCORE = 'score'
function saveData(key, data) {
    let strData = JSON.stringify(data);
    window.localStorage.setItem(key, strData);
}
function loadData(key) {
    if (localStorage.hasOwnProperty(key)) {
        let strData = window.localStorage.getItem(key)
        let data = JSON.parse(strData);
        return data;
    } else {
        return [];
    }
}