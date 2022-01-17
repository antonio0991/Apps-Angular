import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class CauseEffectService {
	constructor(private http: HttpClient) {}

	getPeople() {
		return this.http.get(
			"https://geradorbrasileiro.com/api/faker/pessoa?limit=14"
		);
	}
}
