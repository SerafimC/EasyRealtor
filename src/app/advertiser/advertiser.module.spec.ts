import { AdvertiserModule } from './advertiser.module';

describe('AdvertiserModule', () => {
  let advertiserModule: AdvertiserModule;

  beforeEach(() => {
    advertiserModule = new AdvertiserModule();
  });

  it('should create an instance', () => {
    expect(advertiserModule).toBeTruthy();
  });
});
