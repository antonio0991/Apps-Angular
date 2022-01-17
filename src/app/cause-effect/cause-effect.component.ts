import { Component, OnInit } from "@angular/core";
import { CauseEffectService } from "./cause-effect.service";
import { Observable } from "rxjs";

@Component({
	selector: "app-cause-effect",
	templateUrl: "./cause-effect.component.html",
	styleUrls: ["./cause-effect.component.css"],
})
export class CauseEffectComponent implements OnInit {
	constructor(private causeEffectService: CauseEffectService) {}

	people: any;
	person: any;

	ngOnInit(): void {
		this.getPeople();
	}

	getPeople() {
		this.causeEffectService.getPeople().subscribe((result: any) => {
			this.people = result.values;
			this.person = this.people[0];
			console.log(this.people);
		}),
			(err) => {
				console.log(err);
			};
	}

	setPerson(index: number): void {
		this.person = this.people[index];
		console.log(this.person);
	}
}
