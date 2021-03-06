const test = require('tape');
const DPTLib = require('../../../src');

var tests = [
    [[0x00], 0],
    [[0x01], 1],
    [[0x02], 2],
    [[0x03], 3],
    [[0x04], 4],
    [[0x05], 5],
    [[0x06], 6],
    [[0x07], 7],
    [[0x08], 8],
    [[0x09], 9],
    [[0x0A], 10],
    [[0x0B], 11],
    [[0x0C], 12],
    [[0x0D], 13],
    [[0x0E], 14],
    [[0x0F], 15],
    [[0x10], 16],
    [[0x11], 17],
    [[0x12], 18],
    [[0x13], 19],
    [[0x14], 20],
    [[0x15], 21],
    [[0x16], 22],
    [[0x17], 23],
    [[0x18], 24],
    [[0x19], 25],
    [[0x1A], 26],
    [[0x1B], 27],
    [[0x1C], 28],
    [[0x1D], 29],
    [[0x1E], 30],
    [[0x1F], 31],
    [[0x20], 32],
    [[0x21], 33],
    [[0x22], 34],
    [[0x23], 35],
    [[0x24], 36],
    [[0x25], 37],
    [[0x26], 38],
    [[0x27], 39],
    [[0x28], 40],
    [[0x29], 41],
    [[0x2A], 42],
    [[0x2B], 43],
    [[0x2C], 44],
    [[0x2D], 45],
    [[0x2E], 46],
    [[0x2F], 47],
    [[0x30], 48],
    [[0x31], 49],
    [[0x32], 50],
    [[0x33], 51],
    [[0x34], 52],
    [[0x35], 53],
    [[0x36], 54],
    [[0x37], 55],
    [[0x38], 56],
    [[0x39], 57],
    [[0x3A], 58],
    [[0x3B], 59],
    [[0x3C], 60],
    [[0x3D], 61],
    [[0x3E], 62],
    [[0x3F], 63]
];
var defaultTypes = ["DPT17", "DPT17.001"];

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
            t.deepEqual(converted, obj, `${dptName} fromBuffer ${JSON.stringify(buf)}`
            );
        }
        t.end();
    });
}