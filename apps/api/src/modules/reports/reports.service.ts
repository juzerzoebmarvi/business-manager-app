import { Injectable } from '@nestjs/common';
import { ReportQueryDto } from './dto/report-query.dto';

@Injectable()
export class ReportsService {
  getSupplierInvoiceReport(query: ReportQueryDto) {
    const startDate = query.fromDate || '2025-01-01';
    const endDate = query.toDate || '2025-12-31';

    return {
      title: 'Supplier Invoice Report',
      filters: {
        fromDate: startDate,
        toDate: endDate,
        supplierId: query.supplierId,
        status: query.status
      },
      rows: [
        {
          supplierName: 'Northwind Supplies',
          invoiceNumber: 'BILL-1001',
          invoiceDate: '2025-02-01',
          dueDate: '2025-02-15',
          amount: 2500,
          paidAmount: 2500,
          status: 'Paid'
        },
        {
          supplierName: 'Northwind Supplies',
          invoiceNumber: 'BILL-1007',
          invoiceDate: '2025-02-22',
          dueDate: '2025-03-08',
          amount: 4200,
          paidAmount: 0,
          status: 'Open'
        },
        {
          supplierName: 'Metro Office',
          invoiceNumber: 'BILL-1015',
          invoiceDate: '2025-03-04',
          dueDate: '2025-03-18',
          amount: 1300,
          paidAmount: 1300,
          status: 'Paid'
        }
      ]
    };
  }

  getPaymentReport(query: ReportQueryDto) {
    const startDate = query.fromDate || '2025-01-01';
    const endDate = query.toDate || '2025-12-31';

    return {
      title: 'Payment Report',
      filters: {
        fromDate: startDate,
        toDate: endDate,
        supplierId: query.supplierId,
        customerId: query.customerId,
        paymentType: query.paymentType
      },
      rows: [
        {
          partyName: 'Acme Industries',
          documentNumber: 'INV-2041',
          documentDate: '2025-02-03',
          amountPaid: 1200,
          paymentDate: '2025-02-05',
          paymentMethod: 'Bank Transfer'
        },
        {
          partyName: 'Northwind Supplies',
          documentNumber: 'BILL-1001',
          documentDate: '2025-02-01',
          amountPaid: 2500,
          paymentDate: '2025-02-12',
          paymentMethod: 'ACH'
        }
      ]
    };
  }
}
