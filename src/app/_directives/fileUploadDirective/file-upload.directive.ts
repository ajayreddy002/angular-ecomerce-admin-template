import { Directive, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[appFileUpload]'
})
export class FileUploadDirective {
  @Output() filesDropped = new EventEmitter<FileList>();
  @Output() filesHovered = new EventEmitter<boolean>();
  @Output() selectedFiles = new EventEmitter<boolean>();
  constructor() { }
  @HostListener('drop', ['$event'])
  onDrop($event) {
    $event.preventDefault();
    const transfer = $event.dataTransfer;
    this.filesDropped.emit(transfer.files);
    this.selectedFiles.emit(transfer.files);
    this.filesHovered.emit(false);
  }

  @HostListener('dragover', ['$event'])
  onDragOver($event) {
    event.preventDefault();

    this.filesHovered.emit(true);
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave($event) {
    this.filesHovered.emit(false);
  }
  @HostListener('change', ['$event'])
  change($event) {
    this.selectedFiles.emit($event.target.files);
  }
}
