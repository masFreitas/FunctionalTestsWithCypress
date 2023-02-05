const { uniqueNamesGenerator, adjectives, animals } = require('unique-names-generator');

const getRandomName = () => {
    var customConfig = {
        dictionaries: [adjectives, animals],
        separator: ' ',
        length: 2,
        style: 'capital'
      }

      return uniqueNamesGenerator(customConfig);
}

exports.getRandomName = getRandomName