import { SelectedNameDTO } from './SelectedNameDTO';

export class Categories {
  //#region BaseModel
  ID: number;
  name: SelectedNameDTO = new SelectedNameDTO();
  descr: string;
  image: string;
  homeStatus: boolean;
  //#endregion

  // view for ng-multiselect-dropdown textfield
  NameEN? = this.name._e;
  NameAR? = this.name._a;
}
