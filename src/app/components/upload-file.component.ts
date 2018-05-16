import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'upload-file',
    templateUrl: './upload-file.component.html',
    styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent {

    @ViewChild('seletorArquivo') seletorArquivo: any;
    @Output("uploadFile") onFileUploaded: EventEmitter<File> = new EventEmitter<File>();

    public file: File;

    public constructor(private element: ElementRef){}

    public upload() {
        let files = this.element.nativeElement.querySelector("#file").files;
        this.file = files[0];
        this.onFileUploaded.emit(this.file);
    }

}