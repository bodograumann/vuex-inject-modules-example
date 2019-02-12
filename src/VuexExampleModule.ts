import { decorate, inject, injectable } from "inversify";
import { RegisterOptions, Module, VuexModule } from "vuex-class-modules";

decorate(injectable(), VuexModule);

@Module
@injectable()
export default class VuexExampleModule extends VuexModule {
  constructor(@inject("VuexModuleOptions") options: RegisterOptions) {
    super(options);
  }

  testNumber: number = 3.14152;

  get testString() {
    return "foo bar";
  }
}
