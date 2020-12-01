const findExpectedOutcomeFromExpenseReport = (expectedOutcome: number, expenseReport: number[]) => {
  let expenseReportSum: number = 0;
  expenseReport.forEach((firstValue: number) => {
    expenseReport.forEach((secondValue: number) => {
      expenseReport.forEach((thirdValue: number) => {
        if (firstValue + secondValue + thirdValue === expectedOutcome) expenseReportSum = firstValue * secondValue * thirdValue;
      })
    })
  })
  return expenseReportSum;
}

export default findExpectedOutcomeFromExpenseReport;