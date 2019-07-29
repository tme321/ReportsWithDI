import { InjectionToken } from '@angular/core';
import { TransactionReportServiceService } from './reports/transactions/services/transaction-report-service.service';
import { HoldingsReportServiceService } from './reports/holdings/service/holdings-report-service.service';


export let REPORT_SERVICE = new InjectionToken('REPORT_SERVICE');
export let REPORT_TYPE = new InjectionToken('REPORT_TYPE');


export let reportServiceFactory = (reportType: string) => {
    debugger;
    switch (reportType) {
        case 'Transaction':
            return new TransactionReportServiceService();
        case 'Holdings':
            return new HoldingsReportServiceService();
    }
}


export interface ReportService {
    getColumns();
    getData();
    drillThrough?();
}


