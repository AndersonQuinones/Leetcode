var defangIPaddr = function(address) {
  // Use the 'replace()' method with the regular expression /\./g to replace all occurrences of '.' with '[.]'
  return address.replace(/\./g, '[.]');
};
