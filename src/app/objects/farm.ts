export interface Farm {
    name: string;
    readyForCropping: DueDate
}

export enum DueDate{
    Early='Early',
    InTime="In Time",
    Late="Late",
    Unknown = "Unknown" 
}
