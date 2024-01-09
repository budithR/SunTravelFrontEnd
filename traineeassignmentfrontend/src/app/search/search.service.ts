import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Search } from "./search";
import { ContractOut } from "./contractOut";

@Injectable({
    providedIn: 'root'
})
export class SearchService{
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) {}

    public getSearch(search: Search): Observable<ContractOut[]> {
        return this.http.post<ContractOut[]>(`${this.apiServerUrl}/search/get`, search )
    }
}
