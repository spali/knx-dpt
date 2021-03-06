const test = require('tape');
const DPTLib = require('../../../src');

var tests = [
    [[0x00], 0],
    [[0x01], 1],
    [[0x0A], 10],
    [[0x64], 100],
    [[0x7F], 127],
    [[0xFF], -1],
    [[0xF6], -10],
    [[0x9C], -100],
    [[0x80], -128],
];
var defaultTypes = ["DPT6", "DPT6.001", "DPT6.010"];

for (var type in defaultTypes) {
    var dptName = defaultTypes[type];
    test(dptName, function (t) {
        var dpt = DPTLib.resolve(dptName);
        t.plan(tests.length * 2);
        for (var i = 0; i < tests.length; i++) {
            var buf = new Buffer(tests[i][0]);
            var obj = tests[i][1];

            // backward test (object to raw data)
            converted = dpt.formatAPDU(obj);
            t.deepEqual(converted, buf, `${dptName} formatAPDU ${JSON.stringify(obj)}`);

            // forward test (raw data to object)
            var converted = dpt.fromBuffer(buf);
            t.equal(converted, obj, `${dptName} fromBuffer ${JSON.stringify(buf)}`);
        }
        t.end();
    });
}