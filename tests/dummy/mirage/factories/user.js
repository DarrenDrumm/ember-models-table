import { Factory, faker } from 'ember-cli-mirage';

const {name, random, address} = faker;

export default Factory.extend({

  index(i) {
    return i + 1;
  },

  'first-name'(i) {
    return `${name.firstName()}_${i}`;
  },

  'last-name'(i) {
    return `${name.lastName()}_${i}`;
  },

  age() {
    return 18 + random.number(42);
  },

  city(i) {
    return address.city();
  }

});
