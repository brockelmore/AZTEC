import React from 'react';
import PropTypes from 'prop-types';
import {
    Block,
    Text,
} from '@aztec/guacamole-ui';
import i18n from '~ui/helpers/i18n';
import formatNumber from '~ui/utils/formatNumber';
import {
    assetShape,
} from '~/ui/config/propTypes';
import formatAddress from '~ui/utils/formatAddress';
import PopupContent from '~ui/components/PopupContent';
import Connection from '~ui/components/Connection';
import ListItem from '~ui/components/ListItem';
import Ticket from '~ui/components/Ticket';

const WithdrawConfirm = ({
    asset: {
        address: assetAddress,
        linkedTokenAddress,
        name,
        decimals,
    },
    to,
    amount,
}) => (
    <PopupContent
        title={(
            <div>
                <Text
                    text={i18n.t('withdraw.confirm.title')}
                    size="xl"
                    weight="light"
                />
                <Block padding="0 s" inline>
                    <Text
                        text={formatNumber(amount, decimals)}
                        size="xl"
                        weight="bold"
                    />
                </Block>
                <Text
                    text={name || i18n.t('asset.erc20.token')}
                    size="xl"
                    weight="light"
                />
            </div>
        )}
    >
        <Ticket height={2}>
            <Connection
                theme="white"
                from={{
                    profile: {
                        type: 'asset',
                        address: assetAddress,
                        linkedTokenAddress,
                    },
                    description: formatAddress(assetAddress, 6, 4),
                }}
                to={{
                    profile: {
                        type: 'user',
                        address: to,
                    },
                    tooltip: (
                        <ListItem
                            content={formatAddress(to, 6, 4)}
                            size="xxs"
                            footnote={(
                                <Text
                                    text={`+${formatNumber(amount, decimals)}`}
                                    color="green"
                                />
                            )}
                        />
                    ),
                    description: formatAddress(to, 6, 4),
                }}
                size="s"
                actionIconName="double_arrow"
            />
        </Ticket>
        <Block padding="l">
            <Text
                text={i18n.t('withdraw.confirm.explain')}
                size="xs"
            />
        </Block>
    </PopupContent>
);

WithdrawConfirm.propTypes = {
    asset: assetShape.isRequired,
    to: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
};

export default WithdrawConfirm;