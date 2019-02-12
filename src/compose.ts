import "reflect-metadata";
import { Container } from "inversify";

import store from "./store";
import VuexExampleModule from "./VuexExampleModule";

console.log(VuexExampleModule);
console.log(Reflect.getMetadata("inversify:tagged", VuexExampleModule));

const container = new Container();

container
  .bind("VuexModuleOptions")
  .toConstantValue({ store, name: "vuexModuleName" });

const vuexStore = container.resolve(VuexExampleModule);
export { vuexStore };

console.log(vuexStore);
console.log(vuexStore instanceof VuexExampleModule);
