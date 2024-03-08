import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, CdkDragMove } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  notes = [
    {
      position: { x: 10, y: 10 },
      text: 'Descrição',
    },
  ];

  screenWidth = window.innerWidth;
  screenHeight = window.innerHeight;

  ngOnInit() {
    console.log(this.notes);
  }

  newNote() {
    const length = this.notes.length * 200;
    const centerX = this.screenWidth / 2;
    const centerY = this.screenHeight / 2;

    this.notes.push({
      position: {
        x: centerX - 100,
        y: centerY - length - 100,
      },
      text: 'Descrição',
    });
  }

  onDragMoved(event: CdkDragMove<any>, index: number) {
    this.notes[index].position.x = event.pointerPosition.x;
    this.notes[index].position.y = event.pointerPosition.y;
  }
}
