import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { EncaisseService } from '../../../services/encaisse/encaisse.service';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-edit-encaisse',
  standalone: true,
  imports: [ ReactiveFormsModule, CommonModule, HttpClientModule, FormsModule, NavbarComponent],
  templateUrl: './edit-encaisse.component.html',
  styleUrl: './edit-encaisse.component.css'
})
export class EditEncaisseComponent {
encaisseForm! : FormGroup
finded: any={}
findedId: any={}
id: any
isLoading = false;

  constructor (private fb: FormBuilder , private encaisseService: EncaisseService, private router: Router, private activatedRoute:ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')
      this.encaisseService.getEncaisseId(this.id).subscribe((data) => {
        this.findedId = data.findId;
        this.buildForm()
        
      });

    
  

}

buildForm() {
  this.encaisseForm = this.fb.group({
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

encaisse(id:any){
  this.encaisseService.editEncaisse(this.findedId).subscribe(
    (data)=>{
      console.log(data.message);
      this.router.navigate([`/encaissement`])
    }
  )
}

}
