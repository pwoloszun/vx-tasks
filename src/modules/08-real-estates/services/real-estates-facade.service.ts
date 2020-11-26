import api, { RealEstate } from '@/api/real-estates-api';

class RealEstatesFacadeService {
  public selectedRealEstate: RealEstate | null = null;
  public realEstates: RealEstate[] = [];

  fetch(): void {
    // TODO
  }

  toggleRealEstate(estate): void {
    // TODO
  }
}

const realEstatesFacade = new RealEstatesFacadeService();

export default realEstatesFacade;
