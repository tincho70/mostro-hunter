export interface MostroProps {
  pubkey: string;
  lastSeen: number;
  version: string;
  commit_id: string;
  min_order_amount: string;
  max_order_amount: string;
  expiration_hours: string;
  expiration_seconds: string;
  fee: string;
  pow: string;
  hold_invoice_expiration_window: string;
  hold_invoice_cltv_delta: string;
  invoice_expiration_window: string;
}
