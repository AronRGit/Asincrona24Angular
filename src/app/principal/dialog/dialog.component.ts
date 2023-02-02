import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogOverviewComponent } from '../dialog-overview/dialog-overview.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {

  depor: string = ""
  name: string = ""

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewComponent, {
      data: { name: this.name, depor: this.depor },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.depor = result;
    });
}
}
