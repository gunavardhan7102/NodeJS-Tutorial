const _ = require('lodash');

const nestedarr = [1,[2,[3,[4]]]];

const linearr = _.flattenDeep(nestedarr)

console.log(linearr);
