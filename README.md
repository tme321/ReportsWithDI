# Using component level services to inject different report services

- main thing trying to solve is 

    if (transactionReport) {
        this.transactionService.getData()
    } else if (holdingsreport){
        this.holdingsService.getDate();
    }

    turns in 

    - TransactionService
        - getData()    
        - transaction component
            this.reportService.getData()
    - HoldingsService
        - getData()    
        - holdings component
            this.reportService.getData()


    1) is it overly complicated? 
        - it uses pretty basic angular features
            - useFactory DI 

    2) does it actually solve the issue?
