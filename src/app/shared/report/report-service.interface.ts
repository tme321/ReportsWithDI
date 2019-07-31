import { InjectionToken } from '@angular/core';

export interface ReportService {
    getColumns();
    getData();
    drillThrough?();
    handleDataGridClick(e:any);
    handleColumnChooserClick(e:any);
}

export let REPORT_SERVICE = new InjectionToken<ReportService>('REPORT_SERVICE');
