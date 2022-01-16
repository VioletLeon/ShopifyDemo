let last5Days = new Date();
last5Days.setDate(last5Days.getDate() - 5);
let dd = String(last5Days.getDate()).padStart(2, '0');
let mm = String(last5Days.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = last5Days.getFullYear();
last5Days = yyyy + '-' + mm + '-' + dd;

export default last5Days;
