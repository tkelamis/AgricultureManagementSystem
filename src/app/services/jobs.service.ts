import { Injectable } from '@angular/core';
import { Job, JobType } from '../objects/job';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
jobs: Partial<Job>[] = [
  {id: 1, type: JobType.Prunning},
  {id: 2, type: JobType.Irrigation}
]
}
