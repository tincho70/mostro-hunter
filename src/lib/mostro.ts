import { MostroProps } from '@/features/mostros/mostro';
import { NDKEvent } from '@nostr-dev-kit/ndk';

/**
 * Converts a Nostr event to a MostroProps object.
 *
 * @param {NDKEvent} event - The Nostr event to convert.
 * @return {MostroProps} The converted MostroProps object.
 */
export const eventToMostro = (event: NDKEvent): MostroProps => {
  const mostro: MostroProps = {
    pubkey: event.pubkey,
    lastSeen: (event.created_at || 0) * 1000,
    version: '',
    commit_id: '',
    min_order_amount: '',
    max_order_amount: '',
    expiration_hours: '',
    expiration_seconds: '',
    fee: '',
    pow: '',
    hold_invoice_expiration_window: '',
    hold_invoice_cltv_delta: '',
    invoice_expiration_window: '',
  };
  event.tags.map((tag) => {
    switch (tag[0]) {
      case 'mostro_version':
        mostro.version = tag[1];
        break;
      case 'mostro_commit_id':
        mostro.commit_id = tag[1];
        break;
      case 'min_order_amount':
        mostro.min_order_amount = tag[1];
        break;
      case 'max_order_amount':
        mostro.max_order_amount = tag[1];
        break;
      case 'expiration_hours':
        mostro.expiration_hours = tag[1];
        break;
      case 'expiration_seconds':
        mostro.expiration_seconds = tag[1];
        break;
      case 'fee':
        mostro.fee = tag[1];
        break;
      case 'pow':
        mostro.pow = tag[1];
        break;
      case 'hold_invoice_expiration_window':
        mostro.hold_invoice_expiration_window = tag[1];
        break;
      case 'hold_invoice_cltv_delta':
        mostro.hold_invoice_cltv_delta = tag[1];
        break;
      case 'invoice_expiration_window':
        mostro.invoice_expiration_window = tag[1];
        break;
    }
  });
  return mostro;
};
