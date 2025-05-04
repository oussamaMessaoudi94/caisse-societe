import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DecaisseService {
decaisseUrl = 'http://localhost:3000/decaisse'
  constructor(private httpClient: HttpClient) { }

  decaisse(decaisse:any){
    return this.httpClient.post<{message: any}>(`${this.decaisseUrl}/decaisse`, decaisse)
  }

  getDecaisse(){
    return this.httpClient.get<{find:any}>(`${this.decaisseUrl}`)
  }
  
  getDecaisseId(id:any){
    return this.httpClient.get<{findId: any}>(`${this.decaisseUrl}/${id}`)
  }

  editDecaisse(transfert: any){
    return this.httpClient.put<{message: any}>(`${this.decaisseUrl}/${transfert._id}`, transfert)
  }

  deleteDecaisse(id:any){
    return this.httpClient.delete<{message: any}>(`${this.decaisseUrl}/${id}`)
  }
}
