import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { EncaisseService } from '../../../services/encaisse/encaisse.service';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { NavbarComponent } from "../navbar/navbar.component";
@Component({
  selector: 'app-encaissement',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule, NgxPaginationModule, NavbarComponent],
  templateUrl: './encaissement.component.html',
  styleUrl: './encaissement.component.css'
})
export class EncaissementComponent {
encaisseForm! : FormGroup
finded: any={}
findedId: any={}
filteredData: any[] = []
id: any
p: any= 1

  constructor (private fb: FormBuilder , private encaisseService: EncaisseService, private router: Router){}

  ngOnInit(): void {
this.encaisseService.getEncaisse().subscribe(
  (data)=>{
    this.finded = data.find
    this.filteredData = [...this.finded].reverse();
  }
)
    this.encaisseForm = this.fb.group({
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
  encaisse(id:any){
      if (this.encaisseForm.valid) {
        this.encaisseService.encaisse(this.encaisseForm.value).subscribe(
          (data)=>{
            console.log(data.message);
            this.router.navigate([`/encaissement`])
          }
        )
      } else {
        alert('no')
      }
  }

  editEncaisse(id:any){
    this.router.navigate([`/editEncaisse/${id}`])
  }

  printCaisse(id:any){
    this.router.navigate([`/print/${id}`])
  }

  deleteEncaisse(id:any){
    this.encaisseService.deleteEncaisse(id).subscribe(
      (data)=>{
        this.router.navigate([`/encaissement`])
      }
    )
  }
}
