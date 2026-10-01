import { Controller, Get, Query } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { ReportQueryDto } from './dto/report-query.dto';

@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get('supplier-invoices')
  getSupplierInvoiceReport(@Query() query: ReportQueryDto) {
    return this.reportsService.getSupplierInvoiceReport(query);
  }

  @Get('payments')
  getPaymentReport(@Query() query: ReportQueryDto) {
    return this.reportsService.getPaymentReport(query);
  }
}
