import { ProposeModule } from './propose.module';

describe('ProposeModule', () => {
  let proposeModule: ProposeModule;

  beforeEach(() => {
    proposeModule = new ProposeModule();
  });

  it('should create an instance', () => {
    expect(proposeModule).toBeTruthy();
  });
});
