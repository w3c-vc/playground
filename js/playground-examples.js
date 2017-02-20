/**
 * The JSON-LD Playground example files.
 *
 * @author Manu Sporny <msporny@digitalbazaar.com>
 * @author Dave Longley <dlongley@digitalbazaar.com>
 */
(function($) {
  window.playground = window.playground || {};
  var playground = window.playground;

  // setup the examples and params
  playground.examples = {};
  playground.frames = {};
  playground.contexts = {};

  // add the example of a Place
  playground.examples["Over 21"] = {
    "@context": "https://schema.org/",
    "claim": {
      "id": "did:btc1:2839347234234",
      "ageOver": 21
    },
    "privacyPolicy": "DoNotCorrelate"
  };

  // add the Web of Trust example
  playground.examples["WoT"] = {
    "@context": "https://schema.org/",
    "claim": {
      "id": "did:btc1:298347982739",
      "name": "Alice",
      "knows": {
        "id": "did:eth1:93753829747",
        "name": "Bob"
      }
    }
  };

  // add the example of a Person
  playground.examples["Person"] = {
    "@context": "https://schema.org/",
    "claim": {
      "id": "did:btc1:298347982739",
      "name": "Jane Doe",
      "jobTitle": "Professor",
      "telephone": "(425) 123-4567",
      "url": "http://www.janedoe.com"
    }
  };
})(jQuery);
