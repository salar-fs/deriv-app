import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Text } from '@deriv/components';
import { useIsMounted } from '@deriv/shared';
import { localize, Localize } from '@deriv/translations';
import { WS } from 'Services/ws-methods';
import { connect } from 'Stores/connect';

// check market in coming 7 days
const days_to_check_before_exit = 7;

const getTradingTimes = async target_time => {
    const data = await WS.tradingTimes(target_time);
    if (data.error) {
        return { api_initial_load_error: data.error.message };
    }
    return data;
};
// eslint-disable-next-line consistent-return
const getSymbol = (target_symbol, trading_times) => {
    let symbol;
    const { markets } = trading_times;
    for (let i = 0; i < markets.length; i++) {
        const { submarkets } = markets[i];
        for (let j = 0; j < submarkets.length; j++) {
            const { symbols } = submarkets[j];
            symbol = symbols.find(item => item.symbol === target_symbol);
            if (symbol !== undefined) return symbol;
        }
    }
};
// eslint-disable-next-line consistent-return
const whenMarketOpens = async (days_offset, target_symbol) => {
    // days_offset is 0 for today, 1 for tomorrow, etc.
    if (days_offset > days_to_check_before_exit) return {};
    let remaining_time_to_open;
    const target_date = moment(new Date()).add(days_offset, 'days');
    const api_res = await getTradingTimes(target_date.format('YYYY-MM-DD'));
    if (!api_res.api_initial_load_error) {
        const { times } = getSymbol(target_symbol, api_res.trading_times);
        const { open, close } = times;
        const is_closed_all_day = open?.length === 1 && open[0] === '--' && close[0] === '--';
        if (is_closed_all_day) {
            // check tomorrow trading times
            return whenMarketOpens(days_offset + 1, target_symbol);
        }
        const date_str = target_date.toISOString().substring(0, 11);
        const getUTCDate = hour => new Date(`${date_str}${hour}Z`);
        for (let i = 0; i < open?.length; i++) {
            const diff = +getUTCDate(open[i]) - +new Date();
            if (diff > 0) {
                remaining_time_to_open = +getUTCDate(open[i]);
                return { days_offset, opening_time: open[i], remaining_time_to_open };
            }
        }
        return whenMarketOpens(days_offset + 1, target_symbol);
    }
};

const calculateTimeLeft = remaining_time_to_open => {
    const difference = remaining_time_to_open - +new Date();
    return difference > 0
        ? {
              days: Math.floor(difference / (1000 * 60 * 60 * 24)),
              hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
              minutes: Math.floor((difference / 1000 / 60) % 60),
          }
        : {};
};

const MarketCountdownTimer = ({
    is_main_page,
    is_market_close_overlay_loading,
    setActiveSymbols,
    setMarketCloseOverlayLoading,
    symbol,
}) => {
    const isMounted = useIsMounted();
    const [when_market_opens, setWhenMarketOpens] = React.useState({});
    const [time_left, setTimeLeft] = React.useState(calculateTimeLeft(when_market_opens?.remaining_time_to_open));

    React.useEffect(() => {
        async function fetchTradingTimes() {
            const result = await whenMarketOpens(0, symbol);
            if (isMounted()) setWhenMarketOpens(result);
        }

        fetchTradingTimes();
    }, [symbol]);

    React.useEffect(() => {
        let timer;
        if (when_market_opens?.remaining_time_to_open) {
            timer = setTimeout(async () => {
                setTimeLeft(calculateTimeLeft(when_market_opens?.remaining_time_to_open));
                if (when_market_opens.remaining_time_to_open <= 1 && typeof setActiveSymbols === 'function')
                    await setActiveSymbols();
            }, 1000);
        }
        return () => {
            if (timer) {
                clearTimeout(timer);
            }
        };
    }, [time_left, when_market_opens]);

    let timer_components = '';

    Object.keys(time_left).forEach(interval => {
        if (interval === 'days') {
            if (time_left.days) {
                timer_components += `${time_left.days} ${localize(time_left.days > 1 ? 'days' : 'day')}`;
            }
        } else if (time_left[interval] !== 0) {
            const value = time_left[interval];
            timer_components +=
                interval === 'hours'
                    ? `${time_left.days ? ', ' : ''}${value} ${localize(time_left.hours > 1 ? 'hrs' : 'hr')}`
                    : ` ${localize('and')} ${value} ${localize(time_left.minutes > 1 ? 'mins' : 'min')}`;
        }
    });

    const { opening_time, days_offset } = when_market_opens;
    let opening_time_banner = null;
    if (opening_time) {
        const target_date = moment(new Date()).add(days_offset, 'days');
        const opening_time_moment_obj = moment(opening_time, 'HH:mm');
        const opening_time_hour = opening_time_moment_obj.format('HH');
        const opening_time_min = opening_time_moment_obj.format('mm');
        const formatted_opening_time =
            Number(opening_time_hour) > 11
                ? `${Number(opening_time_hour) % 12}:${opening_time_min} pm`
                : `${Number(opening_time_hour)}:${opening_time_min} am`;
        const opening_date = target_date.format('D MMM YYYY');
        const opening_day = target_date.format('dddd');
        opening_time_banner = (
            <Text
                align='center'
                as='p'
                className='market-is-closed-overlay__open-date'
                line_height='m'
                color='prominent'
                weight='bold'
            >
                <Localize
                    i18n_default_text='{{formatted_opening_time}} (GMT) on {{opening_day}},<0></0> {{opening_date}}.'
                    components={[<br key={0} />]}
                    values={{
                        formatted_opening_time,
                        opening_day,
                        opening_date,
                    }}
                />
            </Text>
        );
    }

    if (!(when_market_opens && timer_components)) return null;

    if (is_main_page && is_market_close_overlay_loading) setMarketCloseOverlayLoading(false);

    return (
        <React.Fragment>
            <Text
                as='p'
                className={classNames('market-is-closed-overlay__open-at', {
                    'market-is-closed-overlay__open-at--main-page': is_main_page,
                })}
                line_height='x'
                size='xs'
            >
                <Localize i18n_default_text='It will reopen at' />
            </Text>
            {opening_time_banner}
            <Text
                align='center'
                as='p'
                className={classNames('market-is-closed-overlay__come-back', {
                    'market-is-closed-overlay__come-back--main-page': is_main_page,
                })}
                line_height='x'
                size='xs'
            >
                <Localize i18n_default_text='Please come back in' />
            </Text>
            <Text
                as='p'
                className={classNames('market-is-closed-overlay__timer', {
                    'market-is-closed-overlay__timer--main-page': is_main_page,
                })}
                line_height='m'
                color='prominent'
                weight='bold'
            >
                {timer_components}
            </Text>
            <div className='market-is-closed-overlay__separator' />
        </React.Fragment>
    );
};

MarketCountdownTimer.propTypes = {
    is_main_page: PropTypes.bool,
    symbol: PropTypes.string.isRequired,
};

export default connect(({ modules }) => ({
    is_market_close_overlay_loading: modules.trade.is_market_close_overlay_loading,
    setActiveSymbols: modules.trade.setActiveSymbols,
    setMarketCloseOverlayLoading: modules.trade.setMarketCloseOverlayLoading,
    symbol: modules.trade.symbol,
}))(MarketCountdownTimer);