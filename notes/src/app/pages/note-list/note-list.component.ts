import { Component, Input, OnInit } from '@angular/core';
import { NotesService } from 'src/app/shared/notes.service';
import { Note } from '../../shared/note.module';
@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent implements OnInit {
 
  notes:Note[]= new Array<Note>();
  constructor(private noteService:NotesService) { }

  ngOnInit(): void {
    this.notes=this.noteService.getAll()
  }

  deleteNote(id:number){
    this.noteService.delete(id)
  }
}
