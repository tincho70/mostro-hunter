/*
 * Reference: https://mostro.network/protocol/other_events.html
 */
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
  lnd_version: string;
  lnd_node_pubkey: string;
  lnd_commit_hash: string;
  lnd_node_alias: string;
  lnd_chains: string;
  lnd_networks: string;
  lnd_uris: string;
}
