import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Note } from '../../models/Note';
import { BaseNote } from '../../models/BaseNote';
import { CheckList } from '../../models/CheckList';
import { ListItem } from '../../models/ListItem';
import { StringHelperService } from 'src/app/services/string-helper.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  notes: BaseNote[];
  newChecklistItemIdKey = 'newChecklistText';
  newChecklistBoxIdKey = 'newChecklistBox';
  hasTextLocal = StringHelperService.hasText;
  isScheduleVisible = true;

  @ViewChild('title', { static: false }) newTitle: ElementRef;
  @ViewChild('text', { static: false }) newText: ElementRef;
  @ViewChild('divNewChecklist', { static: false }) divNewChecklist: ElementRef;
  @ViewChild('dropDownSchedule', { static: false }) dropDownSchedule: ElementRef;

  constructor() {

  }

  ngOnInit(): void {
    this.notes = [];

    let textNote = new Note();
    textNote.id = 1;
    textNote.title = 'Diary';
    textNote.text = 'This is my second application and I am trying to make an useful checklist. Try adding one of your own.';

    this.notes.push(textNote);

    let checkItem1 = new ListItem();
    checkItem1.id = 1;
    checkItem1.text = 'Build Tasky app';
    checkItem1.checked = true;

    let newChecklistItem = new ListItem();
    newChecklistItem.id = 2;
    newChecklistItem.text = 'Deploy Task app';
    newChecklistItem.checked = false;

    let checkList = new CheckList();
    checkList.id = 2;
    checkList.title = 'Tasks for today';
    checkList.items = new Array();

    checkList.items.push(checkItem1);
    checkList.items.push(newChecklistItem);

    this.notes.push(checkList);

    this.notes.push(textNote);
    this.notes.push(checkList);
  }

  saveNote(newNote: Note) {
    newNote.id = this.getMaxNoteId() + 1;
    this.notes.push(newNote);
  }

  getMaxNoteId(): number {
    return this.notes.length == 0 ? 0 : Math.max.apply(Math, this.notes.map(function (o) { return o.id; }));
  }

  saveChecklist(newChecklist: CheckList) {
    let checklist = Object.assign({}, newChecklist);
    checklist.title = newChecklist.title;
    this.notes.push(checklist);
  }

  showSchedule(calendarElement : HTMLElement) {
    this.isScheduleVisible = !this.isScheduleVisible;
    if (this.isScheduleVisible) {
      // console.log(calendarElement.offsetLeft);
      // console.log(calendarElement.offsetTop);
      // console.log('\n');
      // console.log(calendarElement.parentElement.offsetLeft);
      // console.log(calendarElement.parentElement.offsetTop);
      // console.log('\n');
      calendarElement.parentElement.insertAdjacentElement("afterend", this.dropDownSchedule.nativeElement);
    }
  }

  closeSchedule() {
    this.isScheduleVisible = !this.isScheduleVisible;
  }
}