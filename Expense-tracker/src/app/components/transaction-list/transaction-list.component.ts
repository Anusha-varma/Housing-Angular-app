import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { TransactionService } from '../../services/transaction.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-transaction-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent
  implements OnInit, OnChanges, OnDestroy {

  @Input() propertyId!: number;
  @Input() type!: 'income' | 'expense';
  @Output() totalsChange = new EventEmitter<{
  income: number;
  expense: number;
}>();

  transactions: any[] = [];
  sub!: Subscription;

  constructor(private service: TransactionService) {}

  ngOnInit(): void {
    // Listen for add/delete refresh
    this.sub = this.service.refresh$.subscribe(() => {
      this.loadData();
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    // 🔥 THIS FIXES RELOAD ISSUE
    if (changes['propertyId'] && this.propertyId) {
      this.loadData();
    }
  }

  loadData(): void {
  if (!this.propertyId) return;

  this.service.getByProperty(this.propertyId).subscribe(res => {
    const filtered = res.filter(t => t.type === this.type);
    this.transactions = filtered;

    const total = filtered.reduce((sum, t) => sum + t.amount, 0);

    if (this.type === 'income') {
      this.totalsChange.emit({ income: total, expense: 0 });
    } else {
      this.totalsChange.emit({ income: 0, expense: total });
    }
  });
}


  delete(id: number): void {
    this.service.delete(id).subscribe(() => {
      this.service.triggerRefresh();
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
