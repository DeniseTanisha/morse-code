const conv = require("./main");

test.todo("converting Hello World to morse code"),
  () => {
    expect(conv(input, output)).tobe(
      ".... . .-.. .-.. --- / .-- --- .-. .-.. -.. "
    );
  };

it("should render one input box", () => {
  expect(find("InputBox").length).toEqual(1);
});
