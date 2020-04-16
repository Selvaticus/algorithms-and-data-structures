const collectStrings = require("./collect_strings");

test('', () => {
    // Arrange
    const obj = {
        stuff: "foo",
        data: {
            val: {
                thing: {
                    info: "bar",
                    moreInfo: {
                        evenMoreInfo: {
                            weMadeIt: "baz"
                        }
                    }
                }
            }
        }
    }

    // Act / Assert
    expect(collectStrings(obj)).toStrictEqual(["foo", "bar", "baz"]);
});