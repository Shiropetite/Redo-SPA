export class AnimalFilterBuilder {
  private readonly model: any;
  private animals: any[];

  constructor(model: any, allAnimals: any[]) {
    this.model = model;
    this.animals = allAnimals;
  }

  bySpecies = () => {
    if(this.model.species) {
      this.animals = this.animals.filter((animal) => animal.species === this.model.species);
    }
    return this;
  }

  byLocation = () => {
    if(this.model.location) {
      this.animals = this.animals.filter((animal) => animal.refuge.commune === this.model.location);
    }
    return this;
  }
  
  byBuildingName = () => {
    if(this.model.buildingName) {
      this.animals = this.animals.filter((animal) => animal.name === this.model.buildingName);
    }
    return this;
  }

  byAnimalName = () => {
    if(this.model.name) {
      this.animals = this.animals.filter((animal) => animal.name === this.model.name);
    }
    return this;
  }

  byGender = () => {
    if(this.model.gender !== 'indifferent') {
      this.animals = this.animals.filter((animal) => animal.gender === this.model.gender);
    }
    return this;
  }
  
  byAge = () => {
    if(this.model.age !== 'indifferent') {
      this.animals = this.animals.filter((animal) => animal.age === this.model.age);
    }
    return this;
  }

  isSos = () => {
    if(this.model.sos === true) {
      this.animals = this.animals.filter((animal) => animal.sos === this.model.sos);
    }
    return this;
  }

  buildAll(): any[] {
    return this.bySpecies().byLocation().byBuildingName().byAnimalName().byGender().byAge().isSos().animals;
  }

  build() {
    return this.animals;
  }
}
