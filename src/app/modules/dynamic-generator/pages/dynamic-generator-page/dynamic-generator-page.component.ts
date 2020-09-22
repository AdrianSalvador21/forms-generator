import {Component, OnInit, ViewChildren} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {FormPreviewDialogComponent} from '../../dialogs/form-preview-dialog.component';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-dynamic-generator-page',
  templateUrl: './dynamic-generator-page.component.html',
  styleUrls: ['./dynamic-generator-page.component.scss']
})
export class DynamicGeneratorPageComponent implements OnInit {
  private nonDialog: MatDialogRef<FormPreviewDialogComponent, any>;
  @ViewChildren('controlView') controlViews;
  activeElements = [];
  activateReorder = true;
  config: any[] = [];
  elements = [
    'Button',
    'Checkbox',
    'Input',
    'Radiobutton',
    'Select',
    'Date'
  ];
  showPreview = false;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      // move in the same array
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      // move in diferent array
      if (event.previousContainer.id === 'cdk-drop-list-2') {
        return;
      }
      const selectedData = event.previousContainer.data[event.previousIndex];
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.container.data.length);
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      event.previousContainer.data.splice(event.previousIndex, 0, selectedData);
    }
  }

  deleteElement(i) {
    this.activeElements.splice(i, 1);
  }

  save() {
    this.showPreview = false;
    this.config = [];
    if (this.controlViews.length !== 0) {
      this.controlViews.forEach((value) => {
        this.config.push(value.save());
      });
    }
    setTimeout(() => {
      this.showPreview = true;
      const minWidth = '300px';
      const maxWidth = '650px';
      const minHeight = '460px';
      this.nonDialog = this.dialog.open(FormPreviewDialogComponent, {
        width: '95vw',
        minWidth,
        maxWidth,
        minHeight,
        autoFocus: false,
        data: this.config,
      });
    }, 100);
  }

  reorderActive() {
    this.activateReorder = false;
  }

  completeReorder() {
    this.activateReorder = true;
  }

}
