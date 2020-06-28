import React from 'react';
import { Icon, Modal, Popover } from '@deriv/components';
import { localize, Localize } from '@deriv/translations';

const MLTRegulatoryInformation = () => (
    <div className='footer-regulatory-information'>
        <p>
            <Localize
                i18n_default_text='Synthetic indices in the EU and the UK are offered by Deriv (Europe) Ltd, W Business Centre, Level 3, Triq Dun Karm, Birkirkara BKR 9033, Malta, licensed and regulated respectively by the Malta Gaming Authority in Malta <0>(view licence)</0> and the UK Gambling Commission <1>(view licence)</1>. For more information, please read our <2>Terms and conditions</2>.'
                components={[
                    <a
                        href='#TODO'
                        target='_blank'
                        rel='nofollow noreferrer'
                        key={0}
                        className='footer-regulatory-information__link'
                    />,
                    <a
                        href='https://secure.gamblingcommission.gov.uk/PublicRegister/Search/Detail/39495'
                        target='_blank'
                        rel='nofollow noreferrer'
                        key={1}
                        className='footer-regulatory-information__link'
                    />,
                    <a
                        href='https://deriv.com/terms-and-conditions'
                        target='_blank'
                        rel='nofollow noreferrer'
                        key={2}
                        className='footer-regulatory-information__link'
                    />,
                ]}
            />
        </p>
    </div>
);

const MXRegulatoryInformation = () => (
    <div className='footer-regulatory-information'>
        <p>
            <Localize
                i18n_default_text='Synthetic indices in the Isle of Man and the UK are offered by Deriv (MX) Ltd, licensed and regulated respectively by the Gambling Supervision Commission in the Isle of Man and the Gambling Commission in the UK <0>(view licence)</0>.'
                components={[
                    <a
                        href='https://secure.gamblingcommission.gov.uk/PublicRegister/Search/Detail/39172'
                        target='_blank'
                        rel='nofollow noreferrer'
                        key={0}
                        className='footer-regulatory-information__link'
                    />,
                ]}
            />
        </p>
    </div>
);

export const RegulatoryInformation = ({ standpoint, is_eu }) => {
    const [should_show_modal, showModal] = React.useState(false);
    if (!is_eu) return null;
    return (
        <div className='footer__link'>
            <a onClick={() => showModal(true)}>
                <Popover alignment='bottom' message={localize('Regulatory Information')}>
                    <Icon icon='IcRegulatoryInformation' className='footer__icon ic-deriv__icon' />
                </Popover>
            </a>
            <Modal
                is_open={should_show_modal}
                small
                has_close_icon
                toggleModal={() => showModal(false)}
                title={localize('Regulatory Information')}
            >
                {standpoint.iom && <MXRegulatoryInformation />}
                {standpoint.malta && <MLTRegulatoryInformation />}
            </Modal>
        </div>
    );
};
