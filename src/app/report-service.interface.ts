import { InjectionToken } from '@angular/core';


export let REPORT_SERVICE = new InjectionToken('REPORT_SERVICE');


export interface ReportService {
    getColumns();
    getData();
    drillThrough?();
}


