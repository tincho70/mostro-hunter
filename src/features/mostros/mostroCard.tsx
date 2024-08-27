import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

import { MostroProps } from './mostro';
import { formatSats, truncateText } from '@/lib/utils';

import TimeAgo from 'timeago-react';
import { useProfile } from 'nostr-hooks';
import { QuestionMarkCircledIcon } from '@radix-ui/react-icons';

import BitcoinIconsSatoshiV1Outline from '~icons/bitcoin-icons/satoshi-v1-outline';
import RandomAvatar from '../random-avatar';

export default function MostroCard(props: MostroProps) {
  const { profile } = useProfile({ pubkey: props.pubkey });
  const name: string = profile?.displayName || profile?.name || props.pubkey;

  return (
    <Card key={props.pubkey} className="bg-card text-card-foreground">
      <CardHeader className="flex items-center gap-4">
        {profile?.image ? (
          <Avatar className="w-16 h-16">
            <AvatarImage src={profile?.image} />
          </Avatar>
        ) : (
          <RandomAvatar pubkey={props.pubkey} />
        )}
        <div>
          <CardTitle>{truncateText(name, 20)}</CardTitle>
          <CardDescription>
            Last seen: <TimeAgo datetime={props.lastSeen} />
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-2 text-sm">
          <div className="flex items-start font-medium gap-1">
            <span>Version:</span> {props.version}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <QuestionMarkCircledIcon />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="font-medium">Commit ID: {props.commit_id}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div className="flex items-start font-medium gap-1">
            <span>Min Order Amount:</span>
            <BitcoinIconsSatoshiV1Outline />
            {props.min_order_amount}
          </div>
          <div className="flex items-start font-medium gap-1">
            <span className="font-medium">Max Order Amount:</span>
            <BitcoinIconsSatoshiV1Outline />
            {formatSats(props.max_order_amount)}
          </div>
          <div>
            <span className="font-medium">Expiration Hours:</span> {props.expiration_hours}
          </div>
          <div>
            <span className="font-medium">Expiration Seconds:</span> {props.expiration_seconds}
          </div>
          <div>
            <span className="font-medium">Fee:</span> {parseFloat(props.fee) * 100}%
          </div>
          <div>
            <span className="font-medium">PoW:</span> {props.pow}
          </div>
          <div>
            <span className="font-medium">Hold Invoice Expiration Window:</span>{' '}
            {props.hold_invoice_expiration_window} seconds
          </div>
          <div>
            <span className="font-medium">Hold Invoice CLTV Delta:</span>{' '}
            {props.hold_invoice_cltv_delta}
          </div>
          <div>
            <span className="font-medium">Invoice Expiration Window:</span>{' '}
            {props.invoice_expiration_window} seconds
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
