import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Categories } from './datamodel';

/**
 * Author: DaiDH
 */
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // Create DaiDH
  @ViewChild('multiSelect') multiSelect;
  public formGroup: FormGroup;
  public loadContent: boolean = false;
  public name = 'Cricketers';
  public data: Array<Categories> = new Array<Categories>();
  public settings = {};
  public selectedItems = [];

  ngOnInit() {
    this.data = [{name:{_e:'Womens'_a:'نسائيه'},descr:'Womens',image:'category/13_c3b6459c-e7a2-4c99-924c-8d1b2e47edc42022-07-13.png',homeStatus:true,ID:13},
    {name:{_e:'Mens',_a:'رجالية'},descr:'Mens',image:'category/14_2022-05-01_17_29_28.png',homeStatus:true,ID:14},
    {name:{_e:'Home & Garden',_a:'المنزل والحديقة'},descr:'الأطفال',image:'category/44_e24b1b77-9470-465d-9e06-2b310f0cac142022-11-05.png',homeStatus:false,ID:44},
    {name:{_e:'Handicrafts',_a:'مشغولات يدوية'},descr:'الأطفال',image:'category/42_8adbac8b-d5c1-48e0-b289-e833999709092022-11-05.jpg',homeStatus:false,ID:42},
    {name:{_e:'Electronics',_a:'الكترونيات'},descr:'الأطفال',image:'category/43_a8a971be-0e02-4723-bc39-f2a16bf2178d2022-11-05.jpg',homeStatus:false,ID:43},
    {name:{_e:'Baby - Kids',_a:'الأطفال'},descr:'الأطفال',image:'category/41_49a9f374-8966-426e-af5e-924226de6bb12022-11-05.png',homeStatus:false,ID:41}
    ];
    // setting and support i18n
    this.settings = {
      singleSelection: false,
      idField: 'item_id',
      textField: ['item_text'].['_a'],
      enableCheckAll: true,
      selectAllText: 'Chọn All',
      unSelectAllText: 'Hủy chọn',
      allowSearchFilter: true,
      limitSelection: -1,
      clearSearchFilter: true,
      maxHeight: 197,
      itemsShowLimit: 3,
      searchPlaceholderText: 'Tìm kiếm',
      noDataAvailablePlaceholderText: 'Không có dữ liệu',
      closeDropDownOnSelection: false,
      showSelectedItemsAtTop: false,
      defaultOpen: false,
    };
    this.setForm();
  }

  public setForm() {
    this.formGroup = new FormGroup({
      name: new FormControl(this.data, Validators.required),
    });
    this.loadContent = true;
  }

  get f() {
    return this.formGroup.controls;
  }

  public save() {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return;
    }
    console.log(this.formGroup.value);
  }

  public resetForm() {
    // beacuse i need select all crickter by default when i click on reset button.
    this.setForm();
    this.multiSelect.toggleSelectAll();
    // i try below variable isAllItemsSelected reference from your  repository but still not working
    // this.multiSelect.isAllItemsSelected = true;
  }

  public onFilterChange(item: any) {
    console.log(item);
  }
  public onDropDownClose(item: any) {
    console.log(item);
  }

  public onItemSelect(item: any) {
    console.log(item);
  }
  public onDeSelect(item: any) {
    console.log(item);
  }

  public onSelectAll(items: any) {
    console.log(items);
  }
  public onDeSelectAll(items: any) {
    console.log(items);
  }
}
