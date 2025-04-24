export interface Job {
    id: number;
    type: JobType;
    startDate: Date;
    endDate: Date;
    status: JobStatus;
    description: string;
}

export enum JobStatus{
    Pending = 'Pending', 
    InProgress = 'In progress', 
    Completed = 'Completed',
    Delayed = 'Delayed'
}

export enum JobType{
    Prunning="Κλάδεμα",
    Irrigation="Πότισμα"
}
