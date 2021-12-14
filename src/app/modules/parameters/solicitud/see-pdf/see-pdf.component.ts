import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import WebViewer from '@pdftron/webviewer';
import { ActivatedRoute, Router } from '@angular/router';
import { SolicitudService } from 'src/app/services/parameters/solicitud.service';

@Component({
  selector: 'app-see-pdf',
  templateUrl: './see-pdf.component.html',
  styleUrls: ['./see-pdf.component.css']
})
export class SeePdfComponent implements AfterViewInit {

  @ViewChild('viewer') viewerRef: ElementRef;

  constructor(
    private router: Router,
    private service: SolicitudService,
    private route: ActivatedRoute
  ) { }

  ngAfterViewInit(): void {

    const file = this.route.snapshot.params["file"];
    WebViewer({
      path: 'http://localhost:3000/../../archivos/documentos',
      initialDoc: `{{file}}`
    }, this.viewerRef.nativeElement).then(instance =>{

    });
    
    
      
  }
  

}
