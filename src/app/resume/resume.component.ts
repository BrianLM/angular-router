import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JOBS } from './jobs';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  jobIndex: number;
  job: Object;

  constructor( private route: ActivatedRoute ) { }

  ngOnInit() {
    console.log('this route params value id is ', this.route.params.value.id)
    console.log('JOBS IS', JOBS)

    this.route.params.forEach(param => {
      this.job = JOBS.find((job) => job.id === +param.id)
      console.log('this job is ', this.job)
    })
  }

}
