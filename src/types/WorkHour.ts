export default interface WorkHour {
    id: null;
    clearing_house_id: BigInt;
    work_hour_type_id: BigInt;
    calendar_day: Date;
    send_start_time: Date;
    send_end_time: Date;
    reception_start_time: string;
    reception_end_time: Date;
}