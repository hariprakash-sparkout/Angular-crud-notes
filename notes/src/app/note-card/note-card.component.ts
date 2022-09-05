import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss'],
})
export class NoteCardComponent implements OnInit {
  
  @Input()title:string;
  @Input()body:string;
  @Input()link:string;
  @Output('delete') deleteEvent:EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {
   


  }
  onXButtonClick(){
    this.deleteEvent.emit()
  }
}
