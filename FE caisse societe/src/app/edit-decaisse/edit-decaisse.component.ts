import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { DecaisseService } from '../../../services/decaisse/decaisse.service';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-edit-decaisse',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule, FormsModule, NavbarComponent],
  templateUrl: './edit-decaisse.component.html',
  styleUrl: './edit-decaisse.component.css'
})
export class EditDecaisseComponent {
decaisseForm! : FormGroup
finded: any={}
findedId: any={}
id: any
isLoading = false;

constructor (private fb: FormBuilder , private decaisseService: DecaisseService, private router: Router, private activatedRoute:ActivatedRoute){}

ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')
      this.decaisseService.getDecaisseId(this.id).subscribe((data) => {
        this.findedId = data.findId;
        this.buildForm()
        
      });
}

buildForm() {
  this.decaisseForm = this.fb.group({
    date: [this.findedId.date || '', Validators.required],
    beneficier: [this.findedId.beneficier || '', Validators.required],
    modalite: [this.findedId.modalite || '', Validators.required],
    Ncheque: [this.findedId.Ncheque || '', Validators.required],
    bank: [this.findedId.bank || '', Validators.required],
    Ncompte: [this.findedId.Ncompte || '', Validators.required],
    caisse: [this.findedId.caisse || '', Validators.required],
    annee: [this.findedId.annee || '', Validators.required],
    montant: [this.findedId.montant || '', Validators.required],
    objet: [this.findedId.objet || '', Validators.required],
    observation: [this.findedId.observation || '', Validators.required],
  });
}

decaisse(id:any){
  this.decaisseService.editDecaisse(this.findedId).subscribe(
    (data)=>{
      console.log(data.message);
      this.router.navigate([`/decaissement`])
    }
  )
}

}
