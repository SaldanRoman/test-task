import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'app-alreadyadded',
    templateUrl: './alreadyadded.component.html',
    styleUrls: ['./alreadyadded.component.css']
}) 

export class AlreadyaddedComponent {
    @Output() close = new EventEmitter<void>();

    closeModal() {
        this.close.emit();
    }

}