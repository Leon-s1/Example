async function start () {
    return await Promise.resolve('async is working')
}

// eslint-disable-next-line no-console
start().then(console.log)

const unused = 42

class Util {
    static id = Date.now()
}

// eslint-disable-next-line no-console
console.log('Util id', Util.id);
// eslint-disable-next-line no-console
console.log(unused);

import ('lodash').then(_ => {
    // eslint-disable-next-line no-console
    console.log('Lodash ', _.random(0, 42, true));
})