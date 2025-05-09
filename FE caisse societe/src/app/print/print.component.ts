import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EncaisseService } from '../../../services/encaisse/encaisse.service';

@Component({
  selector: 'app-print',
  standalone: true,
  imports: [],
  templateUrl: './print.component.html',
  styleUrl: './print.component.css'
})
export class PrintComponent {
id :any
encaisseId : any={}
date:any

  constructor (private activatedRoute : ActivatedRoute, private encaisseService: EncaisseService) {}

  ngOnInit () {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')
    this.encaisseService.getEncaisseId(this.id).subscribe(
      (data)=>{
        this.encaisseId = data.findId
      }
    )
    this.date = new Date();
  }
}
