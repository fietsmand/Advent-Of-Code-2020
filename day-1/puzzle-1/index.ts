const findExpectedOutcomeFromExpenseReport = (expectedOutcome: number, expenseReport: number[]) => {
  let expenseReportSum: number = 0;
  expenseReport.forEach((currentValue: number) => {
    expenseReport.forEach((compareValue: number) => {
      if (currentValue + compareValue === expectedOutcome) expenseReportSum = currentValue * compareValue
    })
  })
  return expenseReportSum;
}


export default findExpectedOutcomeFromExpenseReport;