const test = require('tape');
const DPTLib = require('../../../src');

var tests = [
    [[0x00], {action: 0, scene: 0}], [[0x80], {action: 1, scene: 0}],
    [[0x01], {action: 0, scene: 1}], [[0x81], {action: 1, scene: 1}],
    [[0x02], {action: 0, scene: 2}], [[0x82], {action: 1, scene: 2}],
    [[0x03], {action: 0, scene: 3}], [[0x83], {action: 1, scene: 3}],
    [[0x04], {action: 0, scene: 4}], [[0x84], {action: 1, scene: 4}],
    [[0x05], {action: 0, scene: 5}], [[0x85], {action: 1, scene: 5}],
    [[0x06], {action: 0, scene: 6}], [[0x86], {action: 1, scene: 6}],
    [[0x07], {action: 0, scene: 7}], [[0x87], {action: 1, scene: 7}],
    [[0x08], {action: 0, scene: 8}], [[0x88], {action: 1, scene: 8}],
    [[0x09], {action: 0, scene: 9}], [[0x89], {action: 1, scene: 9}],
    [[0x0A], {action: 0, scene: 10}], [[0x8A], {action: 1, scene: 10}],
    [[0x0B], {action: 0, scene: 11}], [[0x8B], {action: 1, scene: 11}],
    [[0x0C], {action: 0, scene: 12}], [[0x8C], {action: 1, scene: 12}],
    [[0x0D], {action: 0, scene: 13}], [[0x8D], {action: 1, scene: 13}],
    [[0x0E], {action: 0, scene: 14}], [[0x8E], {action: 1, scene: 14}],
    [[0x0F], {action: 0, scene: 15}], [[0x8F], {action: 1, scene: 15}],
    [[0x10], {action: 0, scene: 16}], [[0x90], {action: 1, scene: 16}],
    [[0x11], {action: 0, scene: 17}], [[0x91], {action: 1, scene: 17}],
    [[0x12], {action: 0, scene: 18}], [[0x92], {action: 1, scene: 18}],
    [[0x13], {action: 0, scene: 19}], [[0x93], {action: 1, scene: 19}],
    [[0x14], {action: 0, scene: 20}], [[0x94], {action: 1, scene: 20}],
    [[0x15], {action: 0, scene: 21}], [[0x95], {action: 1, scene: 21}],
    [[0x16], {action: 0, scene: 22}], [[0x96], {action: 1, scene: 22}],
    [[0x17], {action: 0, scene: 23}], [[0x97], {action: 1, scene: 23}],
    [[0x18], {action: 0, scene: 24}], [[0x98], {action: 1, scene: 24}],
    [[0x19], {action: 0, scene: 25}], [[0x99], {action: 1, scene: 25}],
    [[0x1A], {action: 0, scene: 26}], [[0x9A], {action: 1, scene: 26}],
    [[0x1B], {action: 0, scene: 27}], [[0x9B], {action: 1, scene: 27}],
    [[0x1C], {action: 0, scene: 28}], [[0x9C], {action: 1, scene: 28}],
    [[0x1D], {action: 0, scene: 29}], [[0x9D], {action: 1, scene: 29}],
    [[0x1E], {action: 0, scene: 30}], [[0x9E], {action: 1, scene: 30}],
    [[0x1F], {action: 0, scene: 31}], [[0x9F], {action: 1, scene: 31}],
    [[0x20], {action: 0, scene: 32}], [[0xA0], {action: 1, scene: 32}],
    [[0x21], {action: 0, scene: 33}], [[0xA1], {action: 1, scene: 33}],
    [[0x22], {action: 0, scene: 34}], [[0xA2], {action: 1, scene: 34}],
    [[0x23], {action: 0, scene: 35}], [[0xA3], {action: 1, scene: 35}],
    [[0x24], {action: 0, scene: 36}], [[0xA4], {action: 1, scene: 36}],
    [[0x25], {action: 0, scene: 37}], [[0xA5], {action: 1, scene: 37}],
    [[0x26], {action: 0, scene: 38}], [[0xA6], {action: 1, scene: 38}],
    [[0x27], {action: 0, scene: 39}], [[0xA7], {action: 1, scene: 39}],
    [[0x28], {action: 0, scene: 40}], [[0xA8], {action: 1, scene: 40}],
    [[0x29], {action: 0, scene: 41}], [[0xA9], {action: 1, scene: 41}],
    [[0x2A], {action: 0, scene: 42}], [[0xAA], {action: 1, scene: 42}],
    [[0x2B], {action: 0, scene: 43}], [[0xAB], {action: 1, scene: 43}],
    [[0x2C], {action: 0, scene: 44}], [[0xAC], {action: 1, scene: 44}],
    [[0x2D], {action: 0, scene: 45}], [[0xAD], {action: 1, scene: 45}],
    [[0x2E], {action: 0, scene: 46}], [[0xAE], {action: 1, scene: 46}],
    [[0x2F], {action: 0, scene: 47}], [[0xAF], {action: 1, scene: 47}],
    [[0x30], {action: 0, scene: 48}], [[0xB0], {action: 1, scene: 48}],
    [[0x31], {action: 0, scene: 49}], [[0xB1], {action: 1, scene: 49}],
    [[0x32], {action: 0, scene: 50}], [[0xB2], {action: 1, scene: 50}],
    [[0x33], {action: 0, scene: 51}], [[0xB3], {action: 1, scene: 51}],
    [[0x34], {action: 0, scene: 52}], [[0xB4], {action: 1, scene: 52}],
    [[0x35], {action: 0, scene: 53}], [[0xB5], {action: 1, scene: 53}],
    [[0x36], {action: 0, scene: 54}], [[0xB6], {action: 1, scene: 54}],
    [[0x37], {action: 0, scene: 55}], [[0xB7], {action: 1, scene: 55}],
    [[0x38], {action: 0, scene: 56}], [[0xB8], {action: 1, scene: 56}],
    [[0x39], {action: 0, scene: 57}], [[0xB9], {action: 1, scene: 57}],
    [[0x3A], {action: 0, scene: 58}], [[0xBA], {action: 1, scene: 58}],
    [[0x3B], {action: 0, scene: 59}], [[0xBB], {action: 1, scene: 59}],
    [[0x3C], {action: 0, scene: 60}], [[0xBC], {action: 1, scene: 60}],
    [[0x3D], {action: 0, scene: 61}], [[0xBD], {action: 1, scene: 61}],
    [[0x3E], {action: 0, scene: 62}], [[0xBE], {action: 1, scene: 62}],
    [[0x3F], {action: 0, scene: 63}], [[0xBF], {action: 1, scene: 63}]
];
var defaultTypes = ["DPT18", "DPT18.001"];

for (var type in defaultTypes) {
    var dptName = defaultTypes[type];
    test(dptName, function (t) {
        var dpt18 = DPTLib.resolve(dptName);
        t.plan(tests.length * 2);
        for (var i = 0; i < tests.length; i++) {
            var buf = new Buffer(tests[i][0]);
            var obj = tests[i][1];

            // backward test (object to raw data)
            converted = dpt18.formatAPDU(obj);
            t.deepEqual(converted, buf, `${dptName} formatAPDU ${JSON.stringify(obj)}`);

            // forward test (raw data to object)
            var converted = dpt18.fromBuffer(buf);
            t.deepEqual(converted, obj, `${dptName} fromBuffer ${JSON.stringify(buf)}`
            );
        }
        t.end();
    });
}