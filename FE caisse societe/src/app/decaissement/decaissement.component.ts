import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NavbarComponent } from '../navbar/navbar.component';
import { DecaisseService } from '../../../services/decaisse/decaisse.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-decaissement',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule, NgxPaginationModule, NavbarComponent],
  templateUrl: './decaissement.component.html',
  styleUrl: './decaissement.component.css'
})
export class DecaissementComponent {
decaisseForm! : FormGroup
finded: any={}
findedId: any={}
filteredData: any[] = []
id: any
p: any= 1

constructor (private fb: FormBuilder , private decaisseService: DecaisseService, private router: Router){}

  ngOnInit(): void {
this.decaisseService.getDecaisse().subscribe(
  (data)=>{
    this.finded = data.find
    this.filteredData = [...this.finded].reverse();
  }
)
    this.decaisseForm = this.fb.group({
      date: ['',[Validators.required]],
      beneficier: ['',[Validators.required]],
      modalite: ['',[Validators.required]],
      Ncheque: ['',[Validators.required]],
      bank: ['',[Validators.required]],
      Ncompte: ['',[Validators.required]],
      caisse: ['',[Validators.required]],
      annee: ['',[Validators.required]],
      montant: ['',[Validators.required]],
      objet: ['',[Validators.required]],
      observation: [''],
    })
  }

  filterTable() {
    if (!this.finded) return; // Add this safety check
    
    const dateInput = (document.getElementById('dateInput') as HTMLInputElement)?.value;
    const caisseSelect = (document.getElementById('caisseSelect') as HTMLSelectElement)?.value;
  
    console.log('Filtering with:', { dateInput, caisseSelect }); // Debug log
  
    this.filteredData = [...this.finded]
      .reverse()
      .filter(item => {
        // Convert dates to comparable format
        const itemDate = new Date(item.date).toISOString().split('T')[0];
        const inputDate = dateInput ? new Date(dateInput).toISOString().split('T')[0] : null;
        
        // Check matches
        const dateMatch = !dateInput || itemDate === inputDate;
        const caisseMatch = !caisseSelect || 
          item.caisse?.toLowerCase().includes(caisseSelect.toLowerCase());
        
        return dateMatch && caisseMatch;
      });
  
    console.log('Filtered results:', this.filteredData); // Debug log
  }
  decaisse(id:any){
      if (this.decaisseForm.valid) {
        this.decaisseService.decaisse(this.decaisseForm.value).subscribe(
          (data)=>{
            console.log(data.message);
            this.router.navigate([`/encaissement`])
          }
        )
      } else {
        alert('no')
      }
  }

  editDecaisse(id:any){
    this.router.navigate([`/editDecaissement/${id}`])
  }

  deleteDecaisse(id:any){
    this.decaisseService.deleteDecaisse(id).subscribe(
      (data)=>{
        this.router.navigate([`/encaissement`])
      }
    )
  }
}
