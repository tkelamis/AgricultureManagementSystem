export interface Farm {
    name: string;
    periodOfCropping: DueDate;
    sizeInStremmata: number;
}

export enum DueDate{
    Early='Early',
    InTime="In Time",
    Late="Late",
    Unknown = "Unknown" 
}
