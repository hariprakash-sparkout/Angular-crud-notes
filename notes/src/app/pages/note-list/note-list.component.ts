import { r3JitTypeSourceSpan } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { NotesService } from 'src/app/shared/notes.service';
import { Note } from '../../shared/note.module';
@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss'],
})
export class NoteListComponent implements OnInit {
  notes: Note[] = new Array<Note>();
  filteredNotes: Note[] = new Array<Note>();
  constructor(private noteService: NotesService) {}

  ngOnInit(): void {
    this.notes = this.noteService.getAll();
    this.filteredNotes = this.notes;
  }

  deleteNote(id: number) {
    this.noteService.delete(id);
  }
  filter(query: string) {
    console.log(query.length);

    query = query.toLowerCase().trim();
    let allResults: Note[] = new Array<Note>();
    let terms: string[] = query.split('');

    terms = this.removeDuplicate(terms);

    terms.forEach((term) => {
      let results: Note[] = this.releventNotes(term);
      allResults = [...allResults, ...results];
    });

    let uniqueResult = this.removeDuplicate(allResults);
    this.filteredNotes = uniqueResult;
  }
  removeDuplicate(arr: Array<any>): Array<any> {
    let uniqueResult: Set<any> = new Set<any>();
    arr.forEach((e) => uniqueResult.add(e));
    return Array.from(uniqueResult);
  }
  releventNotes(query: any): Array<Note> {
    query = query.toLowerCase().trim();
    let releventNotes = this.notes.filter((note) => {
      if (note.title && note.title.toLowerCase().includes(query)) {
        return true;
      }
      if (note.body && note.body.toLowerCase().includes(query)) {
        return true;
      } else {
        return false;
      }
    });
    return releventNotes;
  }
}
