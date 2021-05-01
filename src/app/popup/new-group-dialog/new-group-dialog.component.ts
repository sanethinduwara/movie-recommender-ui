import {Component, Inject, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Observable, of} from 'rxjs';
import {UserService} from 'src/app/service/user.service';
import {AuthenticationService} from '../../service/authentication.service';


@Component({
  selector: 'app-new-group-dialog',
  templateUrl: './new-group-dialog.component.html',
  styleUrls: ['./new-group-dialog.component.scss']
})
export class NewGroupDialogComponent implements OnInit {

  allUsers: any[] = [];
  filteredOptions: Observable<any[]> = new Observable();


  constructor(
    public dialogRef: MatDialogRef<NewGroupDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private userService: UserService,
    private authService: AuthenticationService) {
  }


  groupForm: FormGroup = new FormGroup({});

  ngOnInit(): void {
    this.groupForm = this.fb.group({
      name: new FormControl(''),
      users: this.fb.array([this.fb.group({user: ''})])
    });

    this.userService.getAllUsers().subscribe((res: any) => {
      this.allUsers = res;
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  get members(): any {
    return this.groupForm.get('users') as FormArray;
  }


  addMember(): void {
    this.members.push(this.fb.group({user: ''}));
  }

  deleteMember(index: any): void {
    this.members.removeAt(index);
  }

  private _filter(value: any): any[] {
    const filterValue = value.toString();

    return this.allUsers.filter(option => option.userId.toString().indexOf(filterValue) !== -1);
  }

  userIdChange(target: any): void {
    this.filteredOptions = of(this._filter(target.value));
  }

  saveGroup(): void {
    let data: any = this.groupForm.getRawValue();
    let x: any[] = [];
    data.users.forEach((u: { user: any; }) => x.push(+u.user));
    this.authService.currentUser.subscribe((u: any) => {
      x.push(+u.id);
      data.users = x;
      this.dialogRef.close(data);
    });
  }

}

