import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  RequiredValidator,
  Validators,
} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-user-form',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
  ],
  templateUrl: './user-form.html',
  styleUrl: './user-form.scss',
})
export class UserForm {
  userName = '';
  userNameList: string[] = [];
  isEditing = false;
  editingIndex: number | null = null;
  userFormGroup = new FormGroup({
    addUser: new FormControl('', Validators.required),
  });

  add(): void {
    const newName = this.userFormGroup.get('addUser')?.value?.trim();
    if (!newName) {
      return;
    }
    if (this.isEditing && this.editingIndex !== null) {
      this.userNameList[this.editingIndex] = newName;
    } else {
      this.userNameList.push(newName);
      this.resetForm();
    }
    this.resetForm();
  }

  edit(index: number): void {
    const value = this.userNameList[index];
    this.userFormGroup.patchValue({ addUser: value });
    this.isEditing = true;
    this.editingIndex = index;
  }

  delete(index: number): void {
    this.userNameList.splice(index, 1);
  }

  private resetForm(): void {
    this.userFormGroup.reset();
    this.isEditing = false;
    this.editingIndex = null;
  }
}
