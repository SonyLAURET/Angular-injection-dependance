import { Component, OnInit } from '@angular/core';
import { Formation } from '../Formation';
import { FormationService } from '../services/FormationService'
import { FormationApi } from '../services/FormationApi';
@Component({
  selector: 'app-formation-list',
  templateUrl: './formation-list.component.html',
  styleUrls: ['./formation-list.component.css'],
  providers:[FormationService]
})
export class FormationListComponent implements OnInit {

  formations: Array<Formation>;
  constructor(private formationService: FormationService) { }

  ngOnInit() {
    this.formationService.getFormations().then(value => this.formations = value);
  }

}
