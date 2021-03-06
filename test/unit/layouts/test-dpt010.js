const test = require('tape');
const DPTLib = require('../../../src');

var tests = [
    [[12, 23, 34], '12:23:34'],
    [[15, 45, 56], '15:45:56']
];
var defaultTypes = ["DPT10", "DPT10.001"];

for(var type in defaultTypes) {
    var dptName = defaultTypes[type];
    test(dptName, function (t) {
        var dpt = DPTLib.resolve(dptName);
        t.plan(tests.length * 2);
        for (var i = 0; i < tests.length; i++) {
            let buf = new Buffer(tests[i][0]);
            let val = tests[i][1];

            // backward test (value to raw data)
            let converted = dpt.formatAPDU(val);
            t.deepEqual(converted, buf, `${dptName} formatAPDU ${JSON.stringify(val)}`);

            // forward test (raw data to value)
            converted = dpt.fromBuffer(buf);
            t.equal(converted, val, `${dptName} fromBuffer ${JSON.stringify(buf)}`);
        }
        t.end()
    });
}