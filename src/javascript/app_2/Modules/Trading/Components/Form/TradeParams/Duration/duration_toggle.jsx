import classNames               from 'classnames';
import PropTypes                from 'prop-types';
import React, { Fragment }      from 'react';
import { IconArrow }            from 'Assets/Common';

const DurationToggle = ({
    name,
    onChange,
    value,
}) => {
    const toggle = () => {
        onChange({ target: { value: !value, name } });
    };
    const icon_className = classNames(
        'advanced-simple-toggle__icon',
        'select-arrow',
        { 'advanced-simple-toggle__icon--active': value }
    );
    return (
        <Fragment>
            <div className='divider' />
            <button className='advanced-simple-toggle' onClick={toggle}>
                <IconArrow className={icon_className} />
            </button>
        </Fragment>);
};

DurationToggle.propTypes = {
    name    : PropTypes.string,
    onChange: PropTypes.func,
    value   : PropTypes.bool,
};

export default DurationToggle;
