import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EncaisseService {
encaisseUrl = 'http://localhost:3000/encaisse'
  constructor(private httpClient: HttpClient) { }

  encaisse(encaisse:any){
    return this.httpClient.post<{message: any}>(`${this.encaisseUrl}/encaisse`, encaisse)
  }

  getEncaisse(){
    return this.httpClient.get<{find:any}>(`${this.encaisseUrl}`)
  }
  
  getEncaisseId(id:any){
    return this.httpClient.get<{findId: any}>(`${this.encaisseUrl}/${id}`)
  }

  editEncaisse(transfert: any){
    return this.httpClient.put<{message: any}>(`${this.encaisseUrl}/${transfert._id}`, transfert)
  }

  deleteEncaisse(id:any){
    return this.httpClient.delete<{message: any}>(`${this.encaisseUrl}/${id}`)
  }
}
