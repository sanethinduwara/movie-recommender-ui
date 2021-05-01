import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {NewGroupDialogComponent} from 'src/app/popup/new-group-dialog/new-group-dialog.component';
import {AuthenticationService} from 'src/app/service/authentication.service';
import {MovieService} from 'src/app/service/movie.service';
import {GroupService} from '../../service/group.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {

  currentUser: any = null;

  groups: any[] = [];

  constructor(private movieService: MovieService, private authService: AuthenticationService,
              public dialog: MatDialog, private groupService: GroupService,
              private snackBar: MatSnackBar) {
    this.movieService = movieService;
    this.authService.currentUser.subscribe(u => this.currentUser = u);

  }

  ngOnInit(): void {
    this.movieService.getGroupsByUserId(this.currentUser.id).subscribe((res: any) => {
      this.groups = res;
    });
  }

  openNewGroupDialog(): void {
    const dialogRef = this.dialog.open(NewGroupDialogComponent, {
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.groupService.saveGroup(result).subscribe((res: any) => {
        this.snackBar.open('Group successfully created', 'OK', {
          horizontalPosition: 'end',
          verticalPosition: 'bottom'
        });
      }, (err: any) => {
        this.snackBar.open('Failed to create the group', 'OK', {
          horizontalPosition: 'end',
          verticalPosition: 'bottom'
      });
      });
    });
  }
}
