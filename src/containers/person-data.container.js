import { Container } from 'unstated';

class PersonDataContainer extends Container {
  constructor(personData) {
    super();
    this.state = personData;
  }
}

export { PersonDataContainer };
