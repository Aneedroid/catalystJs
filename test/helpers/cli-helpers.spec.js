const { isAliasFoundInFile } = require('../../helpers/cli-helpers');

test('returns true if gst is found in file', () => {
  expect(isAliasFoundInFile('gst', '~/.bash_profile')).toBeTruthy();
});
